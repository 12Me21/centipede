let x = {
	title: "1P/2P Coin Output", pos:{x:6,y:-13},
}
x.placed = [
	{name: 'IC61', symbol: comps.td62064a,
	 pos: {x:4, y:12+72}, sheet:6},
	{name: 'L7', symbol: comps.fb, override_name: '',
	 pos: {x:19, y:12+77}, sheet:6},
	{name: 'L8', symbol: comps.fb, override_name: '',
	 pos: {x:19, y:12+75}, sheet:6},
	{name: 'L9', symbol: comps.fb, override_name: '',
	 pos: {x:19, y:12+73}, sheet:6},
	{name: 'L10', symbol: comps.fb, override_name: '',
	 pos: {x:19, y:12+79}, sheet:6},
	
	{name: 'C32', symbol: comps.cc, override_name: '10nF',
	 pos: {x:25, y:12+77+1}, sheet:6},
	{name: 'C33', symbol: comps.cc, override_name: '10nF',
	 pos: {x:25, y:12+75+1}, sheet:6},
	{name: 'C34', symbol: comps.cc, override_name: '10nF',
	 pos: {x:25, y:12+73+1}, sheet:6},
	{name: 'C35', symbol: comps.cc, override_name: '10nF',
	 pos: {x:25, y:12+79+1}, sheet:6},
]
x.cons = `
+12V: ic61.1 =
AGND: c34.1 +h-1v2J c33.1 +Pv2J c32.1 +Pv2J c35.1 +Pv1 =
FIO.8: ic61.3 =
FIO.7: ic61.6 =
FIO.6: ic61.11 =
FIO.9: ic61.14 =
ic61.9 + l7.1
ic61.7 + l8.1
ic61.2 + l9.1
ic61.16 + l10.1
JAMMA.9: l7.2 +h7Jv1 c32.2 +Ph1 =
JAMMA.K: l8.2 +h7Jv1 c33.2 +Ph1 =
JAMMA.8: l9.2 +h7Jv1 c34.2 +Ph1 =
JAMMA.J: l10.2 +h7Jv1 c35.2 +Ph1 =
`
load(x)
