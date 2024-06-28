let x = {
	title: "Video Blue Output", pos:{x:0,y:26},
}
x.placed = [
	{name: 'title4', displayname: 'Video Blue Output', symbol: null,
	 pos: {x:3, y:61}, sheet:4},
	{name: 'C38', symbol: comps.cc, override_name: '220pF',
	 pos: {x:33+5+5+1-13, y:70-5}, sheet:4},
	{name: 'C39', symbol: comps.cc, override_name: '220pF',
	 pos: {x:33+5+5+1-13, y:71-5+1}, sheet:4},
	
	{name: 'L13', symbol: comps.fb, override_name: '',
	 pos: {x:33+5-13, y:70-5-1}, sheet:4},
	{name: 'L14', symbol: comps.fb, override_name: '',
	 pos: {x:33+5-13, y:71-5}, sheet:4},
	
	{name: 'R18', symbol: comps.r, override_name: '75&ohm;',
	 pos: {x:33-13, y:70-5-1}, sheet:4},
	{name: 'R19', symbol: comps.r, override_name: '75&ohm;',
	 pos: {x:33-13, y:71-5}, sheet:4},
	{name: 'R25', symbol: comps.r, override_name: '100Ω',
	 pos: {x:33-5-1-13+6, y:72-5+1}, sheet:4},
	{name: 'R26', symbol: comps.r, override_name: '2000Ω',
	 pos: {x:21-13+12, y:67+2}, sheet:4},
	
	{name: 'TR1', symbol: comps.npn, override_name: '',
	 pos: {x:21-13, y:65-1}, sheet:4},
	{name: 'TR4', symbol: comps.npn, override_name: '',
	 pos: {x:27-13, y:65}, sheet:4},
]
x.cons = `
AGND: c38.1 +h-1v2J c39.1 +Pv1J r25.2 +Pv1J r26.2 +Pv1 =
#not in notes? ^
tr1.1 +h1J tr4.3 +Pv3 r26.1	
tr4.1 +h1Jv1 r25.1 +Pv-1J r19.1 +Pv-2 r18.1
VCC: tr1.2 =
+12V: tr4.2 =
r18.2 + l13.1
r19.2 + l14.1
M2.3: l13.2 +h7Jv1 c38.2 +Ph1 =
JAMMA.13: l14.2 +h7Jv1 c39.2 +Ph1 =
FDA.VIDEO_BLUE: tr1.3 = #not in notes
`
load(x)
