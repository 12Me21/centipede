function attrxy(x, y) {
	return `x="${x*20}" y="${y*20}"`
}
function spacexy(x, y) {
	return `${x*20} ${y*20}`
}
function attrxy2(a, x, b, y) {
	return `${a}="${x*20}" ${b}="${y*20}"`
}

class Pin {
	constructor(desc, component) {
		if ('string'==typeof desc) {
			let m = /^(\d+) (\S+) (?:@(\d+),(\d+))?/.exec(desc)
			if (!m)
				throw new Error("invalid pin descriptor: “"+desc+"”")
			let [_,num,name,side,slot] = m
			this.name = name
			this.num = num
			side = +side | 0
			slot = +slot | 0
			while (component.used[side][slot])
				slot++
			component.used[side][slot] = true
			this.side = side
			this.slot = slot
		} else {
			Object.assign(this, desc)
		}
		this.calculate_position(component)
	}
	calculate_position(component) {
		this.r = {
			x: [this.slot,component.width,component.width-this.slot,0][this.side],
			y: [0,this.slot,component.height,component.height-this.slot][this.side],
			dir: ["v-20","h20","v20","h-20"][this.side],
			//diro: ["h-1l1,-1l1,1h-1v-10","v-3l3,3l-3,3v-3 h10","v10","h-10"][this.side],
		}
		this.e = {
			x: this.r.x + [0,1,0,-1][this.side],
			y: this.r.y + [-1,0,1,0][this.side],
		}
	}
	todesc() {
		return this.num+" "+this.name+" @"+this.side+","+this.slot
	}
}

class Component {
	constructor(obj) {
		let self = Object.setPrototypeOf(obj, Component.prototype)
		self.used = [[],[],[],[]]
		self.pins = self.pins.map(x=>new Pin(x, self))
		//self.pins2 = self.pins.map(x=>x.todesc())
		return self
	}
	render(placed) {
		let {name, override_name, displayname, suffix="", symbol:def, pos:{x, y}} = placed
		let s = ''
		let {width, height} = def
		let text1 = (displayname || name) + suffix
		let text2 = def.name||override_name
		
		if (def.body) {
			s += `<g class='chip discrete'>`
			s += `<text ${attrxy(x+(def.body=='npn'?1:0), y-0.2)} class='name r'>${text1}</text>`
			s += `<text ${attrxy(x+width-0.2, y-0.2)} class='desc'>${text2} ${def.desc}</text>`
			s += `<path d="M${spacexy(x,y)}${def.bodypath}" class='discretebody'/>`
		} else {
			s += `<g class=chip>`
			if (def.bottomdesc) {
				s += `<text ${attrxy(x+width/2, y+height+0.2)} class='desc c t'>${text2} ${def.desc}</text>`
				s += `<text ${attrxy(x, y-0.2)} class='name l'>${text1}</text>`
			} else {
				s += `<text ${attrxy(x+width/2, y-0.2)} class='desc c'>${text2} ${def.desc}</text>`
				s += `<text ${attrxy(x+width/2, y-0.8)} class='name c'>${text1}</text>`
			}
			s += `<rect class='body' ${attrxy(x, y)} ${attrxy2('width',width,'height',height)} />`
		}
		
		for (let p of def.pins) {
			let px = x + p.r.x
			let py = y + p.r.y
			s += `<path class=pin d="m${spacexy(px,py)}${p.r.dir}" />`
			let pname = p.name
			let ext = ""
			if (pname[0]=="~") {
				// html/svg cannot render overlines properly
				//pname = `<tspan class=overline>${pname.slice(1)}</tspan>`
			}
			pname += suffix
			if (!def.no_names) {
				s += `<text `
				switch (p.side) {
				default:
					break; case 0: s += `transform="translate(${spacexy(px, py+0.2)}) rotate(-90)" class='pname m r'`
					break; case 1: s += `${attrxy(px-0.2, py)} class='pname m r'`
					break; case 2: s += `transform="translate(${spacexy(px, py-0.2)}) rotate(-90)" class='pname m'`
					break; case 3: s += `${attrxy(px+0.2, py)} class='pname m'`
				                }
				s += ` >${p.name}</text>`
			}
			if (!def.no_numbers) {
				s += `<text `
				switch (p.side) {
				default:
					break; case 0: s += `transform="translate(${spacexy(px-0.2, py-0.2)}) rotate(-90)" class='num l'`
					break; case 1: s += `${attrxy(px+0.2, py-0.2)} class='num'`
					break; case 2:;
					break; case 3: s += `${attrxy(px-0.2, py-0.2)} class='num r'`
				}
				s += ` >${p.num}</text>`
			}
		}
		return s + "</g>"
	}
}

let byname = {}
function lookup_pin(des) {
	let [part,pin] = des.split(".")
	if (!part || !pin)
		return [null, null]
	part = part.toUpperCase()
	pin = pin.toUpperCase()
	part = byname[part]
	if (!part)
		return [null, null]
	pin = part.symbol.pins.find(x=>(x.num==pin||x.name==pin))
	return [part, pin]
}
let nets = {}
let hitmap = new Int16Array(200*200)
let z = 10000
function parse_connection_desc(str) {
	let netname = "???"
	{
		let colon = str.indexOf(": ")
		if (colon>=0) {
			netname = str.slice(0, colon)
			str = str.slice(colon+2)
		}
		var desc = str.split(" ")
	}
	return [netname, desc]
}
function draw_conn2(str) {
	let [netname, desc] = parse_connection_desc(str)
	let s_path = "" // kind: svg path d
	let s_label = "" // kind: xml
	let s_junction = "" // kind: xml
	let s_gap = "" // kind: xml
	let px = 0
	let py = 0
	let dir = 0
	let landmarks = []
	function hmi() {
		return px+py*200
	}
	z--
	let net_id = "net"+z
	function new_line(x, y) {
		px = x
		py = y
		s_path += "M"+spacexy(px, py)
	}
	function move_x(n) {
		s_path += "h"+n*20
		let p = hmi()
		let step = Math.sign(n)
		for (let i=0; ; i+=step) {
			if (hitmap[p]>z)
				s_gap += `<circle ${attrxy2('cx',px+i,'cy',py)} r=3 class=crossing />`
			hitmap[p] = z
			p += step
			if (i==n)
				break
		}
		px += n
	}
	function move_y(n) {
		s_path += "v"+n*20
		let p = hmi()
		let step = Math.sign(n)
		for (let i=0; ; i+=step) {
			if (hitmap[p]>z)
				s_gap += `<circle ${attrxy2('cx',px,'cy',py+i)} r=3 class=crossing />`
			hitmap[p] = z
			p += 200*step
			if (i==n)
				break
		}
		py += n
	}
	let drawing = false
	function add_label(text) {
		//text = text.replace(/[.](.*)/, "<tspan class=sub>$1</tspan>")
		if (text=="VCC") {
			s_label += `<path class='netlabelsymbol' d="M${spacexy(px,py)}v-6 h-2 l2,-6 l2,6 h-2 v-6"/>`
		} else if (text=="GND") {
			s_label += `<path class='netlabelsymbol' d="M${spacexy(px,py)}v6 h-6 l6,6 l6,-6 h-6"/>`
		} else if (text=="NC") {
			s_label += `<path class='netlabelsymbol' d="M${spacexy(px,py)}m-4,-4 l8,8 m0-8 l-8,8"/>`
		} else {
			if (dir==3)
				s_label += `<text ${attrxy(px-0.2, py)} class='netlabel m r'>${text}</text>`
			else if (dir==0)
				s_label += `<text transform="translate(${spacexy(px, py-0.2)}) rotate(-90)" class='netlabel m'>${text}</text>`
			else if (dir==2)
				s_label += `<text transform="translate(${spacexy(px, py+0.2)}) rotate(-90)" class='netlabel m r'>${text}</text>`
			else 
				s_label += `<text ${attrxy(px+0.2, py)} class='netlabel m l'>${text}</text>`
		}
	}
	for (let item of desc) {
		if (item[0]=="+") {
			for (let move of item.slice(1).matchAll(/[a-zA-Z][^a-zA-Z]*/g)) {
				move = move[0]
				let num = +move.slice(1)
				if (move[0]=="h") {
					dir = num < 0 ? 3 : 1
					move_x(num)
				} else if (move[0]=='v') {
					dir = num < 0 ? 0 : 2
					move_y(num)
				} else if (move[0]=='J') {
					landmarks.push([px,py])
					s_junction += `<circle ${attrxy2('cx',px,'cy',py)} r=3 class=junction />`
				} else if (move[0]=='P') {
					let [x,y] = landmarks.pop()
					new_line(x, y)
				//} else if (move[0]=='G') {
					//s_gap += `<circle ${attrxy2('cx',px,'cy',py)} r=3 class=crossing />`
				} else {
					throw new Error('oh no +'+move[0])
				}
			}
			drawing = true
		} else if (item=="=") {
			//netname = item.slice(1)
			add_label(netname)
			drawing = false
		} else {
			let [part, pin] = lookup_pin(item)
			if (!part || !pin) {
				throw new Error("lookup pin failed: “"+item+"” in “"+desc+"”")
				add_label(item)
				drawing = false
			} else {
				dir = pin.side
				let x = pin.e.x+part.pos.x
				let y = pin.e.y+part.pos.y
				if (drawing) {
					let dx = x - px
					let dy = y - py
					if (dx)
						move_x(dx)
					if (dy)
						move_y(dy)
				} else {
					new_line(x, y)
				}
			}
			drawing = false
		}
	}
	return {
		wires: `<g class=net data-net="${net_id}">${s_gap}<path class=netwire d="${s_path}"/>${s_junction}</g>`,
		labels: s_label,
	}
}
