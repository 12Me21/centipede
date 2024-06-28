let x = {
	title: "? ESP VDD", pos:{x:-1,y:3},
}
x.placed = [
	{name: 'VR1', symbol: comps.vr,
	 pos: {x:10, y:97}, sheet:7},
	{name: 'R32', symbol: comps.r2, override_name: '510Ω',
	 pos: {x:10, y:95}, sheet:7},
	{name: 'R33', symbol: comps.r2, override_name: '510Ω',
	 pos: {x:4, y:97}, sheet:7},
	{name: 'R31', symbol: comps.r2, override_name: '220Ω',
	 pos: {x:20, y:101}, sheet:7},
	{name: 'C48', symbol: comps.cc2, override_name: '?',
	 pos: {x:10, y:101}, sheet:7},
	{name: 'IC62', symbol: comps.lm317l,
	 pos: {x:20, y:96}, sheet:7},
	{name: 'D1', symbol: comps.d, override_name: '',
	 pos: {x:30-2, y:96+2}, sheet:7},
	
	{name: 'TA', symbol: comps.tc, override_name: '',
	 pos: {x:40, y:96+2}, sheet:7},
]
x.cons = `
+12V: ic62.3 =

GND: r33.2 = c48.2 =
vr1.1 +h-1v-1J vr1.3 +Pv-1Jv-2 r32.2 +P r33.1
vr1.2 +h1Jv-3 r32.1 +Ph1Jv3 c48.1 +Ph2J ic62.1 +Pv3 r31.2
JP4.1: ic62.2 +h1Jv3 r31.1 +PJ d1.1 +Pv-2h5 =
JP4.2: d1.2 =
`
load(x)
