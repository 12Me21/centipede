let placed = [
	{name: '5701', displayname: '5701:clkdiv', symbol: comps.escd,
	 pos: {x:31, y:37}, },
	{name: 'IC1', displayname: 'IC1:3', symbol: comps.hc08c,
	 pos: {x:40, y:39}, },
	{name: 'IC18', symbol: comps.f163,
	 pos: {x:39, y:45}, },
	{name: 'IC19:A', symbol: comps.f74a,
	 pos: {x:29-10-5, y:10+25+10}, },
	{name: 'IC19:B', symbol: comps.f74b,
	 pos: {x:22-10-5, y:10+25+10}, },
	{name: 'IC20:A', symbol: comps.f244a,
	 pos: {x:40-2-10-5, y:11+16+2+10-1}, },
	{name: 'IC20:B', symbol: comps.f244b,
	 pos: {x:40-2-10-5, y:11+25+2+10}, },
	{name: 'IC21A', displayname: 'IC21:1', symbol: comps.f74a,
	 pos: {x:12-5, y:11}, },
	{name: 'IC21B', displayname: 'IC21:2', symbol: comps.f74b,
	 pos: {x:19-5, y:11}, },
	{name: 'IC22', symbol: comps.f161,
	 pos: {x:30-3-5, y:11-5}, },
	{name: 'IC30L', displayname: 'IC30:L', symbol: comps.dpraml,
	 pos: {x:35-5, y:10-5}, },
	{name: 'IC64A', symbol: comps.f74a,
	 pos: {x:12, y:11+4+10}, },
	{name: 'IC64B', symbol: comps.f74b,
	 pos: {x:19+2, y:11+5+10}, },
	{name: 'IC65', symbol: comps.f04,
	 pos: {x:5, y:11+5+10}, }, 
	
	{name: 'C36', symbol: comps.cc2, override_name: '220pF',
	 pos: {x:21, y:60-2}, },
	{name: 'C37', symbol: comps.cc2, override_name: '220pF',
	 pos: {x:21, y:62-2}, },
	{name: 'C38', symbol: comps.cc2, override_name: '220pF',
	 pos: {x:33+5+5+1-13, y:70-5}, },
	{name: 'C39', symbol: comps.cc2, override_name: '220pF',
	 pos: {x:33+5+5+1-13, y:71-5+1}, },
	
	{name: 'L11', symbol: comps.fb, override_name: '',
	 pos: {x:15, y:60-1-2}, },
	{name: 'L12', symbol: comps.fb, override_name: '',
	 pos: {x:15, y:61-2}, },
	{name: 'L13', symbol: comps.fb, override_name: '',
	 pos: {x:33+5-13, y:70-5-1}, },
	{name: 'L14', symbol: comps.fb, override_name: '',
	 pos: {x:33+5-13, y:71-5}, },
	
	{name: 'R3', symbol: comps.r2, override_name: '2400Ω',
	 pos: {x:12-4, y:19}, },
	{name: 'R18', symbol: comps.r, override_name: '75&ohm;',
	 pos: {x:33-13, y:70-5-1}, },
	{name: 'R19', symbol: comps.r, override_name: '75&ohm;',
	 pos: {x:33-13, y:71-5}, },
	{name: 'R24', symbol: comps.r, override_name: '75Ω',
	 pos: {x:12-4, y:60-2}, },
	{name: 'R25', symbol: comps.r2, override_name: '100Ω',
	 pos: {x:33-5-1-13, y:72-5+1}, },
	{name: 'R26', symbol: comps.r2, override_name: '1000Ω',
	 pos: {x:21-13, y:67}, },
	{name: 'R52', symbol: comps.r2, override_name: '82Ω',
	 pos: {x:29, y:41}, },
	{name: 'R53', symbol: comps.r, override_name: '82Ω',
	 pos: {x:29, y:42}, },
	{name: 'R54', symbol: comps.r2, override_name: '82Ω',
	 pos: {x:29, y:51}, },
	{name: 'R55', symbol: comps.r, override_name: '82Ω',
	 pos: {x:29, y:52}, },
	
	{name: 'TR1', symbol: comps.npn, override_name: '',
	 pos: {x:21-13, y:65-1}, },
	{name: 'TR4', symbol: comps.npn, override_name: '',
	 pos: {x:27-13, y:65}, },
	
	{name: 'X1', symbol: comps.osc, override_name: '26.686MHz',
	 pos: {x:16-10-5, y:11+25+10}, },
	{name: 'X2', symbol: comps.osc, override_name: '30.47618MHz',
	 pos: {x:16+10-10-5, y:11+20+10-1}, },
	{name: 'X3', symbol: comps.osc, override_name: '16MHz',
	 pos: {x:16+5+10-10-5, y:11+15+3+10-1}, },
	
	{name: 'ZD5', symbol: comps.zd, override_name: '',
	 pos: {x:12-4, y:62-2}, },
	
	{name: 'IC34', symbol: comps.td62064a,
	 pos: {x:5, y:72}},
	{name: 'ZD1', symbol: comps.zd, override_name: '',
	 pos: {x:13, y:79+1}, },
	{name: 'ZD2', symbol: comps.zd, override_name: '',
	 pos: {x:13, y:77+1}, },
	{name: 'ZD3', symbol: comps.zd, override_name: '',
	 pos: {x:13, y:75+1}, },
	{name: 'ZD4', symbol: comps.zd, override_name: '',
	 pos: {x:13, y:73+1}, },
	{name: 'L2', symbol: comps.fb, override_name: '',
	 pos: {x:18, y:79}, },
	{name: 'L3', symbol: comps.fb, override_name: '',
	 pos: {x:18, y:77}, },
	{name: 'L4', symbol: comps.fb, override_name: '',
	 pos: {x:18, y:75}, },
	{name: 'L5', symbol: comps.fb, override_name: '',
	 pos: {x:18, y:73}, },
	
	{name: 'C28', symbol: comps.cc2, override_name: '10000pF',
	 pos: {x:24, y:79+1}, },
	{name: 'C29', symbol: comps.cc2, override_name: '10000pF',
	 pos: {x:24, y:77+1}, },
	{name: 'C30', symbol: comps.cc2, override_name: '10000pF',
	 pos: {x:24, y:75+1}, },
	{name: 'C31', symbol: comps.cc2, override_name: '10000pF',
	 pos: {x:24, y:73+1}, },
	
	{name: 'IC61', symbol: comps.td62064a,
	 pos: {x:5, y:12+72}},
	{name: 'L7', symbol: comps.fb, override_name: '',
	 pos: {x:18, y:12+77}, },
	{name: 'L8', symbol: comps.fb, override_name: '',
	 pos: {x:18, y:12+75}, },
	{name: 'L9', symbol: comps.fb, override_name: '',
	 pos: {x:18, y:12+73}, },
	{name: 'L10', symbol: comps.fb, override_name: '',
	 pos: {x:18, y:12+79}, },
	
	{name: 'C32', symbol: comps.cc2, override_name: '10000pF',
	 pos: {x:24, y:12+77+1}, },
	{name: 'C33', symbol: comps.cc2, override_name: '10000pF',
	 pos: {x:24, y:12+75+1}, },
	{name: 'C34', symbol: comps.cc2, override_name: '10000pF',
	 pos: {x:24, y:12+73+1}, },
	{name: 'C35', symbol: comps.cc2, override_name: '10000pF',
	 pos: {x:24, y:12+79+1}, },
	
	{name: 'VR1', symbol: comps.vr,
	 pos: {x:10, y:97}, },
	{name: 'R32', symbol: comps.r2, override_name: '510Ω',
	 pos: {x:10, y:95}, },
	{name: 'R33', symbol: comps.r2, override_name: '510Ω',
	 pos: {x:4, y:97}, },
	{name: 'R31', symbol: comps.r2, override_name: '220Ω',
	 pos: {x:20, y:101}, },
	{name: 'C48', symbol: comps.cc2, override_name: '?',
	 pos: {x:10, y:101}, },
	{name: 'IC62', symbol: comps.lm317l,
	 pos: {x:20, y:96}, },
	{name: 'D1', symbol: comps.d, override_name: '',
	 pos: {x:30-2, y:96+2}, },
]

let cons = [
	"vr1.1 +h-1v-1J vr1.3 +Pv-1Jv-2 r32.2 +P r33.1",
	"GND: r33.2 =",
	"GND: c48.2 =",
	"vr1.2 +h1Jv-3 r32.1 +Ph1Jv1 c48.1 +Ph2J ic62.1 +Pv3 r31.2",
	"JP4.1: ic62.2 +h1Jv3 r31.1 +PJ d1.1 +Pv-2h5 =", //jp4.1
	"+12V: ic62.3 =",
	"JP4.2: d1.2 =",
	//"VCC =JP4.3",
	
	"+12V: ic61.1 =",
	"FIO.8: ic61.3 =",
	"FIO.7: ic61.6 =",
	"FIO.6: ic61.11 =",
	"FIO.9: ic61.14 =",
	"ic61.9 + l7.1",
	"ic61.7 + l8.1",
	"ic61.2 + l9.1",
	"ic61.16 + l10.1",
	"JAMMA.9: l7.2 +h1Jv1 c32.2 +Ph6 =",
	"JAMMA.K: l8.2 +h1Jv1 c33.2 +Ph6 =",
	"JAMMA.8: l9.2 +h1Jv1 c34.2 +Ph6 =",
	"JAMMA.J: l10.2 +h1Jv1 c35.2 +Ph6 =",
	"AGND: c32.1 =",
	"AGND: c33.1 =",
	"AGND: c34.1 =",
	"AGND: c35.1 =",
	
	"NC: ic34.1 =",
	"FIO.69: ic34.3 =",
	"FIO.70: ic34.6 =",
	"FIO.71: ic34.14 =",
	"FIO.72: ic34.11 =",
	"ic34.16 +h5Jv1 zd1.2 +P l2.1",
	"ic34.9 +h5Jv1 zd2.2 +P l3.1",
	"ic34.7 +h5Jv1 zd3.2 +P l4.1",
	"ic34.2 +h5Jv1 zd4.2 +P l5.1",
	"GND: zd1.1 =",
	"GND: zd2.1 =",
	"GND: zd3.1 =",
	"GND: zd4.1 =",
	"4P.12: l2.2 +h1Jv1 c28.2 +Ph6 =",
	"3P.12: l3.2 +h1Jv1 c29.2 +Ph6 =",
	"4P.13: l4.2 +h1Jv1 c30.2 +Ph6 =",
	"3P.13: l5.2 +h1Jv1 c31.2 +Ph6 =",
	"AGND: c28.1 =",
	"AGND: c29.1 =",
	"AGND: c30.1 =",
	"AGND: c31.1 =",
	
	"GND: IC22.D0 + IC22.D1 + IC22.D2 + IC22.D3 =",
	
	"VCC: IC22.~LOAD =",
	"NC: IC22.RCO =",
	
	"IC21A.D +v-3h5 IC21A.~Q",
	"IC21B.D +v-3h5 IC21B.~Q",
	
	"ic21a.q +h1J ic21b.clk +Pv5h7v-3 ic22.clk",
	
	"IC22.Q0 + IC30L.A1",
	"IC22.Q1 + IC30L.A2",
	"IC22.Q2 + IC30L.A3",
	"IC22.Q3 + IC30L.A4",
	"OTIS.E: IC21A.CLK = IC30L.1 =",
	
	"GND: IC21A.~PRE =",
	"GND: IC21B.~PRE =",
	//"<circle cx=240 cy=340 r=3 class=crossing />",
	//"<circle cx=380 cy=340 r=3 class=crossing />",
	
	"OTIS.BS: ic21a.~clr = +v2Jh7J ic21b.~clr +P ic22.~mr +Pv2h1 r3.2",
	"GND: r3.1 =",
	
	"ic21b.q +h2J ic22.enp +PJv1h1 ic22.ent +Pv-9h8v2 ic30l.a0",
	
	"GND: ic30l.a5 + ic30l.a6 + ic30l.a7 + ic30l.a8 + ic30l.a9 + ic30l.a10 + =",
	
	"NC: IC30L.IO4 =",
	"NC: IC30L.IO5 =",
	"NC: IC30L.IO6 =",
	"NC: IC30L.IO7 =",
	
	"cartB.89: IC30L.IO0 =",
	"cartB.90: IC30L.IO1 =",
	"cartB.91: IC30L.IO2 =",
	"cartB.92: IC30L.IO3 =",
	
	"GND: IC30L.~OE =",
	
	"(pulldown?): IC30L.~BUSY =", // unsure
	"GND: IC30L.~WE =",
	"NC: IC30L.4 =",
	
	"FDP.205: IC65.13 =",
	"IC65.12 + IC64A.3",
	"CPU.AS: IC65.11 =",
	"IC65.10 +h1J IC64A.4 +Pv3h6v-2 IC64B.10",
	"IC64A.5 + IC64B.12",
	"FCM.109: IC64B.9 =",
	"~VRAM-CE: IC64B.11 =", //], /*"h-10 v60 h-100"*/""],
	
	"VCC: IC64A.1 =",
	"GND: IC64A.2 =",
	"VCC: IC64B.13 =",
	"NC: IC64A.~Q =",
	"NC: IC64B.~Q =",
	
	"IC19:B.D +v-3h5 IC19:B.~Q",
	"IC19:B.Q +h1J IC19:A.CLK +Pv4h9J IC20:B.I2 +Pv-10 IC20:A.I2",
	"FDP.120: IC20:B.I0 +h-1Gh-3v2Gv2h-1 =",
	"~VCLK_7: IC19:A.~Q +Jv-3h-5 IC19:A.D +Ph3Gh10 =",
	"GND: IC19:B.~PRE IC19:B.~CLR =",
	"GND: IC19:A.~PRE IC19:A.~CLR =",
	"IC19:A.Q +h2Jv-1Gv-4h1G IC20:A.I3 +Pv2Gv2Gv1 IC20:B.I3",
	"X1.CLK + IC19:B.CLK",
	
	"GND: IC20:A.~OE =",
	"GND: IC20:B.~OE =",
	"GND: IC20:B.I1 =",
	
	"X3.CLK + IC20:A.I0",
	"X2.CLK +h5v-1 IC20:A.I1",
	
	/*"IC20:A.18 5701.10",
	  "IC20:A.16 +h1J 5701.19 +Pv-1Gv-3h8 =CLK_30",
	  "IC20:B.5 NC",
	  "IC20:B.3 =VSYNC",*/
	"ic20:A.14 + r52.2",
	"VCLK_13: r52.1 =",
	"ic20:A.12 + r53.1",
	"VCLK_7: r53.2 =",
	
	"ic20:B.7 + r54.2",
	"cartC.1: r54.1 =",
	"ic20:B.9 + r55.1",
	"cartC.2: r55.2 =",
	
	"V_SYNC: ic20:B.3 = r24.1 =",
	"r24.2 +h1Jv1v1 zd5.2 +Ph1Jv-1 l11.1 +Pv1 l12.1",
	"GND: zd5.1 =",
	"M2.4: l11.2 +h1Jv1 c36.2 +Ph6 =",
	"JAMMA.P: l12.2 +h1Jv1 c37.2 +Ph6 =",
	"AGND: c36.1 =",
	"AGND: c37.1 =",
	
	"VCC: tr1.2 =",
	"FDA.VIDEO_BLUE: tr1.3 =",
	"tr1.1 +h1J tr4.3 +Pv1h-1 r26.1",
	"tr4.1 +h1Jv1h-1 r25.1 +Pv-1J r19.1 +Pv-2 r18.1",
	"AGND: r25.2 =",
	"AGND: r26.2 =",
	"+12V: tr4.2 =",
	"r18.2 + l13.1",
	"r19.2 + l14.1",
	"M2.3: l13.2 +h1Jv1 c38.2 +Ph6 =",
	"JAMMA.13: l14.2 +h1Jv1 c39.2 +Ph6 =",
	"AGND: c38.1 =",
	"AGND: c39.1 =",
	
	"GND: c37.2 =",
	
	"CLK_30: ic20:A.16 +h2v-2J 5701.19 +Pv-3h6 =",
	"ic20:A.18 +h2G 5701.10",
	
	"NC: ic20:B.5 =",
	"CLK_15: 5701.21 +h2Jv3 ic1.10 +Pv-2h1 =",
	"CPU.CLK: ic1.8 =",
	
	"GND: ic18.3 + ic18.4 + ic18.5 + ic18.6 =",
	"VCC: ic18.1 =",
	"VCC: ic18.10 + ic18.7 + ic18.9 =",
	"NC: ic18.15 =",
	"CLK_8: 5701.8 +h1v4Jv11 ic18.2 +Ph7 =",
	"CLK_4: ic18.14 =",
	"CLK_1: ic18.12 =",
	"CLK_05: ic18.11 =",
	"VCC: ic1.9 =",
]

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
