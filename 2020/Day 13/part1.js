const ts_start = Date.now();
/* Data preparation */
let i = input.split('\n');
let arrival = i[0], buses = i[1];

arrival = parseInt(arrival);
buses = buses.split(',').filter(e => e != 'x').map( e => {
	e = parseInt(e);
	tmp = Math.floor(arrival / e)*e;
	
	return { id:e, ts: tmp+e, diff: (tmp+e)-arrival};
});

const ts_data = Date.now();

/* Algorithm */
buses = buses.sort((a,b) => a.diff - b.diff);

console.log( buses[0].id, ' * ', buses[0].diff, ' = ', buses[0].id * buses[0].diff);

const ts_end = Date.now();

console.log('');
console.log('total time = ', ts_end-ts_start, 'ms');
console.log('total data = ', ts_data-ts_start, 'ms');
console.log('total algorithm = ', ts_end-ts_data, 'ms');