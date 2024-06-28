let sheets = {
	'8': {title: "Power Planes", pos:{x:0,y:5},},
}

let placed = [
	
]

let cons = `
	
	
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
