let x = {
	title: "3P/4P Coin Output", pos:{x:6,y:-13},
}
x.placed = [
	{name: 'IC34', symbol: comps.td62064a,
	 pos: {x:4, y:72}, sheet:5},
	{name: 'ZD1', symbol: comps.zd, override_name: '',
	 pos: {x:13, y:79+1}, sheet:5},
	{name: 'ZD2', symbol: comps.zd, override_name: '',
	 pos: {x:13, y:77+1}, sheet:5},
	{name: 'ZD3', symbol: comps.zd, override_name: '',
	 pos: {x:13, y:75+1}, sheet:5},
	{name: 'ZD4', symbol: comps.zd, override_name: '',
	 pos: {x:13, y:73+1}, sheet:5},
	{name: 'L2', symbol: comps.fb, override_name: '',
	 pos: {x:19, y:79}, sheet:5},
	{name: 'L3', symbol: comps.fb, override_name: '',
	 pos: {x:19, y:77}, sheet:5},
	{name: 'L4', symbol: comps.fb, override_name: '',
	 pos: {x:19, y:75}, sheet:5},
	{name: 'L5', symbol: comps.fb, override_name: '',
	 pos: {x:19, y:73}, sheet:5},
	
	{name: 'C28', symbol: comps.cc, override_name: '10nF',
	 pos: {x:25, y:79+1}, sheet:5},
	{name: 'C29', symbol: comps.cc, override_name: '10nF',
	 pos: {x:25, y:77+1}, sheet:5},
	{name: 'C30', symbol: comps.cc, override_name: '10nF',
	 pos: {x:25, y:75+1}, sheet:5},
	{name: 'C31', symbol: comps.cc, override_name: '10nF',
	 pos: {x:25, y:73+1}, sheet:5},
]
x.cons = `
NC: ic34.1 =
FIO.69: ic34.3 =
FIO.70: ic34.6 =
FIO.72: ic34.11 =
FIO.71: ic34.14 =
GND: zd4.1 +h-1v2J zd3.1 +Pv2J zd2.1 +Pv2J zd1.1 +Pv1 =
ic34.16 +h7Jv1 zd1.2 +P l2.1
ic34.9 +h7Jv1 zd2.2 +P l3.1
ic34.7 +h7Jv1 zd3.2 +P l4.1
ic34.2 +h7Jv1 zd4.2 +P l5.1
AGND: c31.1 +h-1v2J c30.1 +Pv2J c29.1 +Pv2J c28.1 +Pv1 =
4P.12: l2.2 +h7Jv1 c28.2 +Ph1 =
3P.12: l3.2 +h7Jv1 c29.2 +Ph1 =
4P.13: l4.2 +h7Jv1 c30.2 +Ph1 =
3P.13: l5.2 +h7Jv1 c31.2 +Ph1 =
`
load(x)
