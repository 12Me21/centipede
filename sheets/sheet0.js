let x = {
	title: "OTIS Bank Expander", pos: {x:0,y:0}, box:[{x:0,y:0},{x:10,y:10}],
}
x.placed = [
	{name: 'title0', displayname: 'OTIS Voice Sample Bank Counter', symbol: null,
	 pos: {x:5, y:3}},
	{name: 'IC21A', displayname: 'IC21:1', symbol: comps.f74a,
	 pos: {x:12-5, y:11}},
	{name: 'IC21B', displayname: 'IC21:2', symbol: comps.f74b,
	 pos: {x:19-5, y:11}},
	{name: 'IC22', symbol: comps.f161,
	 pos: {x:30-3-5, y:11-5}},
	{name: 'IC30L', displayname: 'IC30:L', symbol: comps.dpraml,
	 pos: {x:35-5, y:10-5}},
	{name: 'R3', symbol: comps.r2, override_name: '2400Ω',
	 pos: {x:12-4, y:19+1}},
	{name: 'R5', symbol: comps.r, override_name: '1000Ω',
	 pos: {x:35+2, y:10+7}},
]
x.cons = `
VCC: ic21A.4 = ic21B.10 = ic22.9 =
OTIS.E: IC21A.CLK = IC30L.1 =
div1: ic21A.q +h1J ic21B.clk +Pv5h7v-3 ic22.clk
OTIS.BS: ic21a.1 = +v2Jh7J ic21b.13 +P ic22.1 +Pv3 r3.2 #r3.2 not in notes?
VCC: r3.1 +h1 =
feedback1: ic21A.D +v-3h5 ic21A.~Q
feedback2: ic21B.D +v-3h5 ic21B.~Q
div2: ic21b.q +h2J ic22.enp +PJv1h1 ic22.ent +Pv-9h8v2 ic30l.a0
div3: ic22.Q0 + ic30L.A1
div4: ic22.Q1 + ic30L.A2
div5: ic22.Q2 + ic30L.A3
div6: ic22.Q3 + ic30L.A4

NC: IC30L.IO4 = IC30L.IO5 = IC30L.IO6 = IC30L.IO7 = #not in notes
GND: ic30l.a5 + ic30l.a6 + ic30l.a7 + ic30l.a8 + ic30l.a9 + ic30l.a10 + = #not in notes
cartB.89: IC30L.IO0 =
cartB.90: IC30L.IO1 =
cartB.91: IC30L.IO2 =
cartB.92: IC30L.IO3 =

GND: ic22.3 + ic22.4 + ic22.5 + ic22.6 = ic30L.2 = r5.2 +h1 =
NC: ic22.15 =
pulldown r5: ic30L.3 + r5.1
NC: IC30L.4 = #?? not in notes?
`
load(x)
