let x = {
	title: "Video Sync Output", pos:{x:10,y:26},
}
x.placed = [
	{name: 'title3', displayname: 'Video Sync Output', symbol: null,
	 pos: {x:3, y:56}, sheet:3},
	{name: 'C36', symbol: comps.cc, override_name: '220pF',
	 pos: {x:21, y:60-2}, sheet:3},
	{name: 'C37', symbol: comps.cc, override_name: '220pF',
	 pos: {x:21, y:62-2}, sheet:3},
	{name: 'L11', symbol: comps.fb, override_name: '',
	 pos: {x:15, y:60-1-2}, sheet:3},
	{name: 'L12', symbol: comps.fb, override_name: '',
	 pos: {x:15, y:61-2}, sheet:3},
	{name: 'R24', symbol: comps.r, override_name: '75Ω',
	 pos: {x:12-4, y:60-2}, sheet:3},
	{name: 'ZD5', symbol: comps.zd, override_name: '',
	 pos: {x:12-4, y:62-2}, sheet:3},
]
x.cons = `
V_SYNC: r24.1 =
r24.2 +h1Jv1v1 zd5.2 +Ph1Jv-1 l11.1 +Pv1 l12.1 #not in notes?

AGND: c36.1 +h-1v2J c37.1 +Pv1 =
#not in notes? ^
GND: zd5.1 = #not in notes
M2.4: l11.2 +h7Jv1 c36.2 +Ph1 = #not in notes
JAMMA.P: l12.2 +h7Jv1 c37.2 +Ph1 = #not in notes
`
load(x)
