let sheets = {
	'0': {title: "OTIS Bank Expander", pos: {x:0,y:0},},
	'1': {title: "? FDP Memory Control", pos: {x:0,y:0},},
	'2': {title: "Clocks", pos: {x:0,y:0},},
	'3': {title: "Video Sync Output", pos:{x:10,y:26},},
	'4': {title: "Video Blue Output", pos:{x:0,y:26},},
	'5': {title: "3P/4P Coin Output", pos:{x:6,y:-13},},
	'6': {title: "1P/2P Coin Output", pos:{x:6,y:-13},},
	'7': {title: "? ESP VDD", pos:{x:-1,y:3},},
	'8': {title: "Power Planes", pos:{x:0,y:5},},
}

let placed = [
	{name: '5701', displayname: '5701:clkdiv', symbol: comps.escd,
	 pos: {x:31-1, y:37}, sheet:2},
	{name: 'IC1', displayname: 'IC1:3', symbol: comps.hc08c,
	 pos: {x:40-1, y:38-2}, sheet:2},
	{name: 'R1', symbol: comps.r, override_name: '1600Ω',
	 pos: {x:40-1, y:40}, sheet:2},
	{name: 'R2', symbol: comps.r, override_name: '56Ω',
	 pos: {x:40+3+1, y:40-3}, sheet:2},
	{name: 'IC18', symbol: comps.f163,
	 pos: {x:39-1, y:45}, sheet:2},
	{name: 'IC19:A', symbol: comps.f74a,
	 pos: {x:29-10-5, y:10+25+10}, sheet:2},
	{name: 'IC19:B', symbol: comps.f74b,
	 pos: {x:22-10-5, y:10+25+10}, sheet:2},
	{name: 'IC20:A', symbol: comps.f244a,
	 pos: {x:40-2-10-5, y:11+16+2+10-1}, sheet:2},
	{name: 'IC20:B', symbol: comps.f244b,
	 pos: {x:40-2-10-5, y:11+25+2+10}, sheet:2},
	{name: 'IC21A', displayname: 'IC21:1', symbol: comps.f74a,
	 pos: {x:12-5, y:11}, sheet:0},
	{name: 'IC21B', displayname: 'IC21:2', symbol: comps.f74b,
	 pos: {x:19-5, y:11}, sheet:0},
	{name: 'IC22', symbol: comps.f161,
	 pos: {x:30-3-5, y:11-5}, sheet:0},
	{name: 'IC30L', displayname: 'IC30:L', symbol: comps.dpraml,
	 pos: {x:35-5, y:10-5}, sheet:0},
	{name: 'IC64A', symbol: comps.f74a,
	 pos: {x:12, y:11+4+10}, sheet:1},
	{name: 'IC64B', symbol: comps.f74b,
	 pos: {x:19+2, y:11+5+10}, sheet:1},
	{name: 'IC65', symbol: comps.f04,
	 pos: {x:5, y:11+5+10}, sheet:1}, 
	
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
	
	{name: 'R3', symbol: comps.r2, override_name: '2400Ω',
	 pos: {x:12-4, y:19+1}, },
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
	{name: 'R52', symbol: comps.r2, override_name: '62Ω',
	 pos: {x:29, y:41}, },
	{name: 'R53', symbol: comps.r, override_name: '62Ω',
	 pos: {x:29, y:42}, },
	{name: 'R54', symbol: comps.r2, override_name: '62Ω',
	 pos: {x:29, y:51}, },
	{name: 'R55', symbol: comps.r, override_name: '62Ω',
	 pos: {x:29, y:52}, },
	{name: 'R5', symbol: comps.r, override_name: '1000Ω',
	 pos: {x:35+2, y:10+7}, },
	
	{name: 'TR1', symbol: comps.npn, override_name: '',
	 pos: {x:21-13, y:65-1}, sheet:4},
	{name: 'TR4', symbol: comps.npn, override_name: '',
	 pos: {x:27-13, y:65}, sheet:4},
	
	{name: 'X1', symbol: comps.osc, override_name: '26.686MHz',
	 pos: {x:16-10-5, y:11+25+10}, sheet:2},
	{name: 'X2', symbol: comps.osc, override_name: '30.47618MHz',
	 pos: {x:16+10-10-5, y:11+20+10-1}, sheet:2},
	{name: 'X3', symbol: comps.osc, override_name: '16MHz',
	 pos: {x:16+5+10-10-5, y:11+15+3+10-1}, sheet:2},
	
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
16mhz osc output: x3.8 + ic20:A.2
CLK_30: ic20:A.16 +h1v-2J 5701.19 +Pv-1 =
16mhz buffered: ic20:A.18 +h2 5701.10

26mhz osc output: x1.8 + ic19:B.11
vclkdiv feedback 1: IC19:B.8 +v-3h-5 IC19:B.12

IC19:B.Q +h1J IC19:A.CLK +Pv4h9J IC20:B.I2 +Pv-10 IC20:A.I2

~VCLK_7: IC19:A.6 +Jv-3h-5 IC19:A.2 +Ph13 =
FDP.120: IC20:B.I0 +h-4v4h-1 =

ic20:A.14 + r52.2
VCLK_13: r52.1 =
ic20:B.7 + r54.2
cartC.1: r54.1 =

IC19:A.Q +h2Jv-5h1 IC20:A.I3 +Pv5 IC20:B.I3
ic20:A.12 + r53.1
VCLK_7: r53.2 =
ic20:B.9 + r55.1
cartC.2: r55.2 =
	
GND: ic19:B.~PRE + ic19:B.~CLR = ic19:A.~PRE + ic19:A.~CLR =

GND: IC20:A.~OE = IC20:B.~OE = IC20:B.I1 =

NC: ic20:B.5 =

30mhz osc output: x2.8 +h5v-1 ic20:A.4
#clk_30

V_SYNC: ic20:B.3 = r24.1 =
r24.2 +h1Jv1v1 zd5.2 +Ph1Jv-1 l11.1 +Pv1 l12.1 #not in notes?

VCC: ic1.9 =

CLK_15: 5701.21 +h1Jh1J ic1.10 +Pv2 r1.1 +Pv-1 =
ic1.8 + r2.1
CPU.CLK: r2.2 =
VCC: r1.2 +h1 =

GND: IC64A.2 =
VCC: IC64A.1 = IC64B.13 =
NC: IC64A.6 = IC64B.8 =

FDP.205: ic65.13 =
inverted fdp 205: IC64A.3 + IC65.12
CPU.AS: ic65.11 =
cpu as inverted preset 1+2: ic65.10 +h1J ic64A.4 +Pv3h6v-2 ic64B.10
output 1 to input 2: ic64A.5 + ic64B.12
FCM.109: ic64B.9 =
~VRAM-CE: ic64B.11 =

GND: ic18.3 + ic18.4 + ic18.5 + ic18.6 =
VCC: ic18.1 = ic18.10 + ic18.7 + ic18.9 =
NC: ic18.15 =

CLK_8: 5701.8 +h1v4Jv11 ic18.2 +Ph7 =
CLK_4: ic18.14 =
CLK_1: ic18.12 =
CLK_05: ic18.11 =

VCC: ic21A.4 = ic21B.10 = ic22.9 =
GND: ic22.3 + ic22.4 + ic22.5 + ic22.6 = ic30L.2 = r5.2 +h1 =
NC: ic22.15 =
pulldown r5: ic30L.3 + r5.1
NC: IC30L.4 = #?? not in notes?
	
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
