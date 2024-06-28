let sheets = {
	'3': {title: "Video Sync Output", pos:{x:10,y:26},},
	'4': {title: "Video Blue Output", pos:{x:0,y:26},},
	'5': {title: "3P/4P Coin Output", pos:{x:6,y:-13},},
	'6': {title: "1P/2P Coin Output", pos:{x:6,y:-13},},
	'7': {title: "? ESP VDD", pos:{x:-1,y:3},},
	'8': {title: "Power Planes", pos:{x:0,y:5},},
}

let placed = [
	{name: 'title3', displayname: 'Video Sync Output', symbol: null,
	 pos: {x:3, y:56}, sheet:3},
	{name: 'title4', displayname: 'Video Blue Output', symbol: null,
	 pos: {x:3, y:61}, sheet:4},
	

	{name: 'C36', symbol: comps.cc, override_name: '220pF',
	 pos: {x:21, y:60-2}, sheet:3},
	{name: 'C37', symbol: comps.cc, override_name: '220pF',
	 pos: {x:21, y:62-2}, sheet:3},
	{name: 'C38', symbol: comps.cc, override_name: '220pF',
	 pos: {x:33+5+5+1-13, y:70-5}, sheet:4},
	{name: 'C39', symbol: comps.cc, override_name: '220pF',
	 pos: {x:33+5+5+1-13, y:71-5+1}, sheet:4},
	
	{name: 'L11', symbol: comps.fb, override_name: '',
	 pos: {x:15, y:60-1-2}, sheet:3},
	{name: 'L12', symbol: comps.fb, override_name: '',
	 pos: {x:15, y:61-2}, sheet:3},
	{name: 'L13', symbol: comps.fb, override_name: '',
	 pos: {x:33+5-13, y:70-5-1}, sheet:4},
	{name: 'L14', symbol: comps.fb, override_name: '',
	 pos: {x:33+5-13, y:71-5}, sheet:4},
	
	{name: 'R18', symbol: comps.r, override_name: '75&ohm;',
	 pos: {x:33-13, y:70-5-1}, sheet:4},
	{name: 'R19', symbol: comps.r, override_name: '75&ohm;',
	 pos: {x:33-13, y:71-5}, sheet:4},
	{name: 'R24', symbol: comps.r, override_name: '75Ω',
	 pos: {x:12-4, y:60-2}, sheet:3},
	{name: 'R25', symbol: comps.r, override_name: '100Ω',
	 pos: {x:33-5-1-13+6, y:72-5+1}, sheet:4},
	{name: 'R26', symbol: comps.r, override_name: '2000Ω',
	 pos: {x:21-13+12, y:67+2}, sheet:4},
	
	{name: 'TR1', symbol: comps.npn, override_name: '',
	 pos: {x:21-13, y:65-1}, sheet:4},
	{name: 'TR4', symbol: comps.npn, override_name: '',
	 pos: {x:27-13, y:65}, sheet:4},
	
	{name: 'ZD5', symbol: comps.zd, override_name: '',
	 pos: {x:12-4, y:62-2}, sheet:3},
	
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

let cons = `
V_SYNC: r24.1 =
r24.2 +h1Jv1v1 zd5.2 +Ph1Jv-1 l11.1 +Pv1 l12.1 #not in notes?

AGND: c36.1 +h-1v2J c37.1 +Pv5J c38.1 +Pv2J c39.1 +Pv1J r25.2 +Pv1J r26.2 +Pv1 =
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
GND: zd5.1 = #not in notes
M2.4: l11.2 +h7Jv1 c36.2 +Ph1 = #not in notes
JAMMA.P: l12.2 +h7Jv1 c37.2 +Ph1 = #not in notes

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

+12V: ic62.3 =

GND: r33.2 = c48.2 =
vr1.1 +h-1v-1J vr1.3 +Pv-1Jv-2 r32.2 +P r33.1
vr1.2 +h1Jv-3 r32.1 +Ph1Jv3 c48.1 +Ph2J ic62.1 +Pv3 r31.2
JP4.1: ic62.2 +h1Jv3 r31.1 +PJ d1.1 +Pv-2h5 =
JP4.2: d1.2 =
	
	
`

/* hmm what if
instead of the + designators being 'between' two pin designators,
they are metadata on each pin des, meaning  "here is how to connect 
this pin back to the rest of the net"
and then, a junction is like,  here is a point where those back-connections meet up. (if there are more than 2)

so like, e.g.
`ic1.1(h2v-3) ic1.2(h-2v-3)`

@         @ 
|   IC1   |
|  -----  |
+-=1   2=-+
   -----
ie they are instructions to guide wires from the pin towards a location where they can more easily connect.
we then take these exposed endpoints and either autoconnect them together, or add net name labels

this system has a big advantage: the order of items in the list is no longer significant.

however, we do need to deal with how to place labels that aren't directly on a pin.

*/
