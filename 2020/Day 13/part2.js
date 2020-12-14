const ts_start = Date.now();
/* Data preparation */
let i = input.split('\n');
let buses = '17,x,x,19';
let min = 1;

buses = buses.split(',').map( (e, idx) => {
	e = parseInt(e);
	return { id:e, cond: idx};
}).filter(e => !isNaN(e.id));
buses = buses.sort((a,b) => a.e - b.e);

const ts_data = Date.now();

/* Algorithm */

console.log( buses[buses.length-1].id, buses[buses.length-1].cond );

let found = false;

function validateT ( t ) {
	
	for( let i = 0; i < buses.length; i++ ) {
		let tmp = calcNextT(t, buses[i].id);
		if( t+buses[i].cond != tmp )
			return false;
	}
	return true;
}

function calcNextT( t, id ) {
	tmp = Math.floor(t / id)*id;
	if( tmp < t )
		tmp += id;
	return tmp;
}

let t;
while( !found ) {
	t = calcNextT(min, buses[buses.length-1].id)-buses[buses.length-1].cond;
	found = validateT(t);
	
	min = t+buses[buses.length-1].cond+1;
}

console.log(t);

const ts_end = Date.now();

function mdc( a, b ) {
	if( b == 0 ) 
		return a;
	else
		return mdc(b, a%b);
}
console.log(parseInt(mdc(buses[1].id-buses[1].cond, buses[0].id-buses[0].cond)));
console.log(parseInt(mdc(buses[1].id-buses[1].cond, buses[0].id-buses[0].cond)));

console.log('');
console.log('total time = ', ts_end-ts_start, 'ms');
console.log('total data = ', ts_data-ts_start, 'ms');
console.log('total algorithm = ', ts_end-ts_data, 'ms');