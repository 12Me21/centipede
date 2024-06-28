let x = {
	title: "Clocks", pos: {x:0,y:0},
}
x.placed = [
	{name: 'title2', displayname: 'Clocks', symbol: null,
	 pos: {x:3, y:38}, sheet:2},
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
	{name: 'X1', symbol: comps.osc, override_name: '26.686MHz',
	 pos: {x:16-10-5, y:11+25+10}, sheet:2},
	{name: 'X2', symbol: comps.osc, override_name: '30.47618MHz',
	 pos: {x:16+10-10-5, y:11+20+10-1}, sheet:2},
	{name: 'X3', symbol: comps.osc, override_name: '16MHz',
	 pos: {x:16+5+10-10-5, y:11+15+3+10-1}, sheet:2},
	{name: 'R52', symbol: comps.r2, override_name: '62Ω',
	 pos: {x:29, y:41}, },
	{name: 'R53', symbol: comps.r, override_name: '62Ω',
	 pos: {x:29, y:42}, },
	{name: 'R54', symbol: comps.r2, override_name: '62Ω',
	 pos: {x:29, y:51}, },
	{name: 'R55', symbol: comps.r, override_name: '62Ω',
	 pos: {x:29, y:52}, },
]
x.cons = `
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

V_SYNC: ic20:B.3 = #r24.1 =

VCC: ic1.9 =

CLK_15: 5701.21 +h1Jh1J ic1.10 +Pv2 r1.1 +Pv-1 =
ic1.8 + r2.1
CPU.CLK: r2.2 =
VCC: r1.2 +h1 =

GND: ic18.3 + ic18.4 + ic18.5 + ic18.6 =
VCC: ic18.1 = ic18.10 + ic18.7 + ic18.9 =
NC: ic18.15 =

CLK_8: 5701.8 +h1v4Jv11 ic18.2 +Ph7 =
CLK_4: ic18.14 =
CLK_1: ic18.12 =
CLK_05: ic18.11 =
`
load(x)
