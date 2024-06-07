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
	
]

let cons = [
	"ic61.1 =+12V",
	"ic61.3 =FIO.8",
	"ic61.6 =FIO.7",
	"ic61.11 =FIO.6",
	"ic61.14 =FIO.9",
	"ic61.9 + l7.1",
	"ic61.7 + l8.1",
	"ic61.2 + l9.1",
	"ic61.16 + l10.1",
	"l7.2 +h1Jv1 c32.2 +Ph6 =JAMMA.9",
	"l8.2 +h1Jv1 c33.2 +Ph6 =JAMMA.K",
	"l9.2 +h1Jv1 c34.2 +Ph6 =JAMMA.8",
	"l10.2 +h1Jv1 c35.2 +Ph6 =JAMMA.J",
	"c32.1 =AGND",
	"c33.1 =AGND",
	"c34.1 =AGND",
	"c35.1 =AGND",
	
	"ic34.1 NC",
	"ic34.3 =FIO.69",
	"ic34.6 =FIO.70",
	"ic34.14 =FIO.71",
	"ic34.11 =FIO.72",
	"ic34.16 +h5Jv1 zd1.2 +P l2.1",
	"ic34.9 +h5Jv1 zd2.2 +P l3.1",
	"ic34.7 +h5Jv1 zd3.2 +P l4.1",
	"ic34.2 +h5Jv1 zd4.2 +P l5.1",
	"zd1.1 GND",
	"zd2.1 GND",
	"zd3.1 GND",
	"zd4.1 GND",
	"l2.2 +h1Jv1 c28.2 +Ph6 =4P.12",
	"l3.2 +h1Jv1 c29.2 +Ph6 =3P.12",
	"l4.2 +h1Jv1 c30.2 +Ph6 =4P.13",
	"l5.2 +h1Jv1 c31.2 +Ph6 =3P.13",
	"c28.1 =AGND",
	"c29.1 =AGND",
	"c30.1 =AGND",
	"c31.1 =AGND",
	
	"IC22.D0 + IC22.D1 + IC22.D2 + IC22.D3 GND",
	
	"IC22.~LOAD VCC",
	"IC22.RCO NC",
	
	"IC21A.D +v-3h5 IC21A.~Q",
	"IC21B.D +v-3h5 IC21B.~Q",
	
	"ic21a.q +h1J ic21b.clk +Pv5h7v-3 ic22.clk",
	
	"IC22.Q0 + IC30L.A1",
	"IC22.Q1 + IC30L.A2",
	"IC22.Q2 + IC30L.A3",
	"IC22.Q3 + IC30L.A4",
	"IC21A.CLK =OTIS.E IC30L.1 =OTIS.E",
	
	"IC21A.~PRE GND",
	"IC21B.~PRE GND",
	"<circle cx=240 cy=340 r=3 class=crossing />",
	"<circle cx=380 cy=340 r=3 class=crossing />",
	
	"ic21a.~clr =OTIS.BS +v2Jh7J ic21b.~clr +P ic22.~mr +Pv2h1 r3.2",
	"r3.1 GND",
	
	"ic21b.q +h2J ic22.enp +PJv1h1 ic22.ent +Pv-9h8v2 ic30l.a0",
	
	"ic30l.a5 + ic30l.a6 + ic30l.a7 + ic30l.a8 + ic30l.a9 + ic30l.a10 + GND",
	
	"IC30L.IO4 NC",
	"IC30L.IO5 NC",
	"IC30L.IO6 NC",
	"IC30L.IO7 NC",
	
	"IC30L.IO0 =cartB.89",
	"IC30L.IO1 =cartB.90",
	"IC30L.IO2 =cartB.91",
	"IC30L.IO3 =cartB.92",
	
	"IC30L.~OE GND",
	
	"IC30L.~BUSY =(pulldown?)", // unsure
	"IC30L.~WE GND",
	"IC30L.4 NC",
	
	"IC65.13 =FDP.205",
	"IC65.12 + IC64A.3",
	"IC65.11 =CPU.AS",
	"IC65.10 +h1J IC64A.4 +Pv3h6v-2 IC64B.10",
	"IC64A.5 + IC64B.12",
	"IC64B.9 =FCM.109",
	"IC64B.11 =~VRAM-CE", //], /*"h-10 v60 h-100"*/""],
	
	"IC64A.1 VCC",
	"IC64A.2 GND",
	"IC64B.13 VCC",
	"IC64A.~Q NC",
	"IC64B.~Q NC",
	
	"IC19:B.D +v-3h5 IC19:B.~Q",
	"IC19:B.Q +h1J IC19:A.CLK +Pv4h9J IC20:B.I2 +Pv-10 IC20:A.I2",
	"IC20:B.I0 +h-1Gh-3v2Gv2h-1 =FDP.120",
	"IC19:A.~Q +Jv-3h-5 IC19:A.D +Ph3Gh10 =~VCLK_7",
	"IC19:B.~PRE IC19:B.~CLR GND",
	"IC19:A.~PRE IC19:A.~CLR GND",
	"IC19:A.Q +h2Jv-1Gv-4h1G IC20:A.I3 +Pv2Gv2Gv1 IC20:B.I3",
	"X1.CLK + IC19:B.CLK",
	
	"IC20:A.~OE GND",
	"IC20:B.~OE GND",
	"IC20:B.I1 GND",
	
	"X3.CLK + IC20:A.I0",
	"X2.CLK +h5v-1 IC20:A.I1",
	
	/*"IC20:A.18 5701.10",
	  "IC20:A.16 +h1J 5701.19 +Pv-1Gv-3h8 =CLK_30",
	  "IC20:B.5 NC",
	  "IC20:B.3 =VSYNC",*/
	"ic20:A.14 + r52.2",
	"r52.1 =VCLK_13",
	"ic20:A.12 + r53.1",
	"r53.2 =VCLK_7",
	
	"ic20:B.7 + r54.2",
	"r54.1 =cartC.1",
	"ic20:B.9 + r55.1",
	"r55.2 =cartC.2",
	
	"ic20:B.3 =V_SYNC r24.1 =V_SYNC",
	"r24.2 +h1Jv1v1 zd5.2 +Ph1Jv-1 l11.1 +Pv1 l12.1",
	"zd5.1 GND",
	"l11.2 +h1Jv1 c36.2 +Ph6 =M2.4",
	"l12.2 +h1Jv1 c37.2 +Ph6 =JAMMA.P",
	"c36.1 =AGND",
	"c37.1 =AGND",
	
	"tr1.2 VCC",
	"tr1.3 =FDA.VIDEO_BLUE",
	"tr1.1 +h1J tr4.3 +Pv1h-1 r26.1",
	"tr4.1 +h1Jv1h-1 r25.1 +Pv-1J r19.1 +Pv-2 r18.1",
	"r25.2 =AGND",
	"r26.2 =AGND",
	"tr4.2 =&plus;12V",
	"r18.2 + l13.1",
	"r19.2 + l14.1",
	"l13.2 +h1Jv1 c38.2 +Ph6 =M2.3",
	"l14.2 +h1Jv1 c39.2 +Ph6 =JAMMA.13",
	"c38.1 =AGND",
	"c39.1 =AGND",
	
	"c37.2 GND",
	
	"ic20:A.16 +h2v-2J 5701.19 +Pv-3h6 =CLK_30",
	"ic20:A.18 +h2G 5701.10",
	
	"ic20:B.5 NC",
	"5701.21 +h2Jv3 ic1.10 +Pv-2h1 =CLK_15",
	"ic1.8 =CPU.CLK",
	
	"ic18.3 + ic18.4 + ic18.5 + ic18.6 GND",
	"ic18.1 VCC",
	"ic18.10 + ic18.7 + ic18.9 VCC",
	"ic18.15 NC",
	"5701.8 +h1v4Jv11 ic18.2 +Ph7 =CLK_8",
	"ic18.14 =CLK_4",
	"ic18.12 =CLK_1",
	"ic18.11 =CLK_05",
	"ic1.9 VCC",
]
