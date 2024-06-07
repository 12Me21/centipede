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
		if (def.body) {
			s += `<g class='chip discrete'>`
			s += `<text ${attrxy(x+(def.body=='npn'?1:0), y-0.2)} class='name r'>${displayname || name}${suffix}</text>`
			s += `<text ${attrxy(x+width, y-0.2)} class='desc'>${def.name||override_name} ${def.desc}</text>`
			s += `<path d="M${spacexy(x,y)}${def.bodypath}" class='discretebody'/>`
		} else {
			s += `<g class=chip>`
			if (def.bottomdesc) {
				s += `<text ${attrxy(x+width/2, y+height+0.2)} class='desc c t'>${def.name||override_name} ${def.desc}</text>`
				s += `<text ${attrxy(x, y-0.2)} class='name l'>${displayname || name}${suffix}</text>`					
			} else {
				s += `<text ${attrxy(x+width/2, y-0.2)} class='desc c'>${def.name||override_name} ${def.desc}</text>`
				s += `<text ${attrxy(x+width/2, y-0.8)} class='name c'>${displayname || name}${suffix}</text>`
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
				switch (p.side) { default:
				                  break; case 0: s += `transform="translate(${spacexy(px, py+0.2)}) rotate(-90)" class='pname m r'`
				                  break; case 1: s += `${attrxy(px-0.2, py)} class='pname m r'`
				                  break; case 2: s += `transform="translate(${spacexy(px, py-0.2)}) rotate(-90)" class='pname m'`
				                  break; case 3: s += `${attrxy(px+0.2, py)} class='pname m'`
				                }
				s += ` >${p.name}</text>`
			}
			if (!def.no_numbers) {
				s += `<text `
				switch (p.side) { default:
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
