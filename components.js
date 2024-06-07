let comps = {
	f74a: new Component({
		width: 3,
		height: 5,
		name: "74F74",
		desc: "D flip-flop",
		pins: [
			"1 ~CLR @3,1",
			"2 D @3,4",
			"3 CLK @3,3",
			"4 ~PRE @3,2",
			"5 Q @1,2",
			"6 ~Q @1,1",
		],
	}),
	f74b: new Component({
		width: 3,
		height: 5,
		name: "74F74",
		desc: "D flip-flop",
		pins: [
			"8 ~Q @1,1",
			"9 Q @1,2",
			"10 ~PRE @3,2",
			"11 CLK @3,3",
			"12 D @3,4",
			"13 ~CLR @3,1",
		],
	}),
	f161: new Component({
		width: 4,
		height: 12,
		name: "74F161",
		desc: "binary counter",
		pins: [
			"1 ~MR @3,1",
			"2 CLK @3,3",
			"3 D0 @3,11",
			"4 D1 @3,10",
			"5 D2 @3,9",
			"6 D3 @3,8",
			"7 ENP @3,5",
			
			"9 ~LOAD @3,6",
			"10 ENT @3,4",
			"11 Q3 @1,4",
			"12 Q2 @1,3",
			"13 Q1 @1,2",
			"14 Q0 @1,1",
			"15 RCO @1,10",
		],
	}),
	f163: new Component({
		width: 4,
		height: 12,
		name: "74F163",
		desc: "binary counter",
		pins: [
			"1 ~SR @3,1",
			"2 CLK @3,3",
			"3 D0 @3,11",
			"4 D1 @3,10",
			"5 D2 @3,9",
			"6 D3 @3,8",
			"7 ENP @3,5",
			
			"9 ~LOAD @3,6",
			"10 ENT @3,4",
			"11 Q3 @1,4",
			"12 Q2 @1,3",
			"13 Q1 @1,2",
			"14 Q0 @1,1",
			"15 RCO @1,10",
		],
	}),
	dpraml: new Component({
		width: 4,
		height: 16,
		name: "MB8421 L",
		desc: "dual-port RAM",
		pins: [
			"1 ~CS @3,3",
			"2 ~WE @3,2",
			"3 ~BUSY @1,12",
			"4 ~INT @1,13",
			
			"6 A10 @3,5",
			"7 ~OE @3,1",
			"8 A0 @3,15",
			"9 A1 @3,14",
			"10 A2 @3,13",
			"11 A3 @3,12",
			"12 A4 @3,11",
			"13 A5 @3,10",
			"14 A6 @3,9",
			"15 A7 @3,8",
			"16 A8 @3,7",
			"17 A9 @3,6",
			"18 IO0 @1,1",
			"19 IO1 @1,2",
			"20 IO2 @1,3",
			"21 IO3 @1,4",
			"22 IO4 @1,5",
			"23 IO5 @1,6",
			"24 IO6 @1,7",
			"25 IO7 @1,8",
		],
	}),
	f04: new Component({
		width: 3,
		height: 7,
		name: "74F04",
		desc: "inverter",
		pins: [
			"1 I1 @3,1",
			"2 ~Y1 @1,6",
			"3 I2 @3,2",
			"4 ~Y2 @1,5",
			"5 I3 @3,3",
			"6 ~Y3 @1,4",
			
			"8 ~Y4 @1,3",
			"9 I4 @3,4",
			"10 ~Y5 @1,2",
			"11 I5 @3,5",
			"12 ~Y6 @1,1",
			"13 I6 @3,6",
		],
	}),
	hc08c: new Component({
		width: 3,
		height: 3,
		name: "74HC08",
		desc: "AND gate",
		pins: [
			"8 Y @1,1",
			"9 A @3,2",
			"10 B @3,1",
		],
	}),
	osc: new Component({
		width:3,
		height: 2,
		desc: "oscillator",
		pins: [
			"8 CLK @1,1",
		],
	}),
	f244a: new Component({
		width: 3,
		height: 7,
		name: "74F244",
		desc: "line driver",
		pins: [
			"1 ~OE @3,1",
			"2 I0 @3,6",
			"4 I1 @3,5",
			"6 I2 @3,4",
			"8 I3 @3,3",
			"12 Y3 @1,4",
			"14 Y2 @1,3",
			"16 Y1 @1,2",
			"18 Y0 @1,1",
		],
	}),
	f244b: new Component({
		width: 3,
		height: 7,
		name: "74F244",
		desc: "line driver",
		pins: [
			"19 ~OE @3,1",
			"17 I0 @3,6",
			"15 I1 @3,5",
			"13 I2 @3,4",
			"11 I3 @3,3",
			"9 Y3 @1,4",
			"7 Y2 @1,3",
			"5 Y1 @1,2",
			"3 Y0 @1,1",
		],
	}),
	escd: new Component({
		width: 4,
		height: 3,
		name: "ES5701",
		desc: "Super-GLU",
		pins: [
			"10 16MI @3,1",
			"19 20MI @3,2",
			"8 8M @1,2",
			"21 10M @1,1",
		],
	}),
	r: new Component({
		width: 2,
		height: 0,
		name: "",
		desc: "",
		body: 'resistor',
		bodypath: 'h2l3,-6l6,12l6,-12l6,12l6,-12l6,12l3,-6h2',
		no_names: true,
		no_numbers: true,
		pins: [
			"1 &Tab; @3,0",
			"2 &Tab; @1,0",
		],
	}),
	r2: new Component({
		width: 2,
		height: 0,
		name: "",
		desc: "",
		body: 'resistor',
		bodypath: 'h2l3,-6l6,12l6,-12l6,12l6,-12l6,12l3,-6h2',
		no_names: true,
		no_numbers: true,
		pins: [
			"2 &Tab; @3,0",
			"1 &Tab; @1,0",
		],
	}),
	zd: new Component({
		width: 2,
		height: 0,
		name: "",
		desc: "",
		body: 'zener',
		bodypath: 'l5,0v12l24,-12l-24,-12v12m24,0h1v-10l4,-4m-4,14v10l-4,4m4,-14l10,0',
		no_names: true,
		no_numbers: true,
		pins: [
			"1 &Tab; @3,0",
			"2 &Tab; @1,0",
		],
	}),
	fb: new Component({
		width: 2,
		height: 0,
		name: "",
		desc: "",
		body: 'ferrite',
		bodypath: 'h13l8,-12l10,6l-4,6l-8,12l-10,-6 l4,-6 m14,0 h13',
		no_names: true,
		no_numbers: true,
		pins: [
			"1 &Tab; @3,0",
			"2 &Tab; @1,0",
		],
	}),
	cc: new Component({
		width: 2,
		height: 0,
		name: "",
		desc: "",
		body: 'cc',
		bodypath: 'h15m0,-12v24m10,0v-24m0,12h15',
		no_names: true,
		no_numbers: true,
		pins: [
			"1 &Tab; @3,0",
			"2 &Tab; @1,0",
		],
	}),
	cc2: new Component({
		width: 2,
		height: 0,
		name: "",
		desc: "",
		body: 'cc',
		bodypath: 'h15m0,-12v24m10,0v-24m0,12h15',
		no_names: true,
		no_numbers: true,
		pins: [
			"1 &Tab; @1,0",
			"2 &Tab; @3,0",
		],
	}),
	npn: new Component({
		width: 2,
		height: 2,
		name: "",
		desc: "",
		body: 'npn',
		bodypath: 'm3,20a 20,20 0 01 40,0a 20,20 0 01 -40,0h12m0,-15v30m0,-8l20,10h5v5m-5,-5m-20,-10m0,8m0,-30m0,8l20,-10h5v-5m-18,30l5,5l-7,-1',
		no_names: true,
		pins: [
			"1 E @1,2",
			"2 C @0,2",
			"3 B @3,1",
		],
	}),
	td62064a: new Component({
		width: 5, height: 8,
		name: "TD062064A",
		bottomdesc: true,
		desc: "high-current driver",
		pins: [
			"1 COM @0,3", // and 8, pins connected internally
			"2 O1 @1,1",
			"7 O2 @1,3",
			"9 O3 @1,5",
			"16 O4 @1,7",
			"3 I1 @3,7",
			"6 I2 @3,5",
			"11 I3 @3,3",
			"14 I4 @3,1",
		],
	}),
	vr: new Component({
		width: 3, height: 3,
		name: "501WL?",
		desc: "variable resistor",
		pins: [
			"1 ? @3,1",
			"2 ? @1,1",
			"3 ? @3,2",
		],
	}),
	lm317l: new Component({
		width: 4, height: 3,
		name: "LM317L",
		desc: "voltage regulator",
		bottomdesc: true,
		pins: [
			"1 ADJ @3,1",
			"2 OUT @1,2",
			"3 IN @0,3",
		],
	}),
	d: new Component({
		width: 2,
		height: 0,
		name: "",
		desc: "",
		body: 'diode',
		bodypath: 'l7,0v12l24,-12l-24,-12v12m24,0h1m0,-13v26m0,-13l10,0',
		no_names: true,
		no_numbers: true,
		pins: [
			"1 &Tab; @3,0",
			"2 &Tab; @1,0",
		],
	}),
}
