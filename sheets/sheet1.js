let x = {
	title: "? FDP Memory Control", pos: {x:0,y:0},
}
x.placed = [
	{name: 'title1', displayname: 'FDP Memory Control ?', symbol: null,
	 pos: {x:4, y:22}, sheet:1},
	{name: 'IC64A', symbol: comps.f74a,
	 pos: {x:12, y:11+4+10}, sheet:1},
	{name: 'IC64B', symbol: comps.f74b,
	 pos: {x:19+2, y:11+5+10}, sheet:1},
	{name: 'IC65', symbol: comps.f04,
	 pos: {x:5, y:11+5+10}, sheet:1}, 
]
x.cons = `
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
`
load(x)
