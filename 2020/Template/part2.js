const ts_start = Date.now();
/* Data preparation */
data = input;

const ts_data = Date.now();

/* Algorithm */

const ts_end = Date.now();

console.log('');
console.log('total time = ', ts_end-ts_start, 'ms');
console.log('total data = ', ts_data-ts_start, 'ms');
console.log('total algorithm = ', ts_end-ts_data, 'ms');