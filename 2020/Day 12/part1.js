const ts_start = Date.now();
/* Data preparation */
var insts = input.split('\n');


const ts_data = Date.now();

/* Algorithm */

let x = 0, y = 0;
let dir = 90;

function switchDir(angle) {
    dir = Math.abs((360 + dir + angle) % 360);
}

function move( v ) {
    switch(dir) {
        case 90: x += v; break;
        case 270: x -= v; break;
        case 0: y += v; break;
        case 180: y -= v; break;
    }
}

function moveDir( newdir, v ) {
    switch(newdir) {
        case 'E': x += v; break;
        case 'W': x -= v; break;
        case 'N': y += v; break;
        case 'S': y -= v; break;
    }
}


console.log(insts);
insts.forEach( inst => {
    let cmd = inst.substr(0,1);
    let value = parseInt(inst.substr(1));
    console.log(inst);
console.log(cmd);
console.log(value);
    switch(cmd) {
        case 'F':
            move(value);
            break;
        case 'L':
            switchDir(-value);
            break;
        case 'R': 
            switchDir(value);
            break;

        case 'E': 
        case 'W': 
        case 'N': 
        case 'S': 
            moveDir(cmd,value);
            break;
        default:
            break;
    }
    console.log(x +" + " + y + " = " + (x+y));
    console.log(dir);
});

console.log(x +" + " + y + " = " + (Math.abs(x)+Math.abs(y)));
const ts_end = Date.now();

console.log('');
console.log('total time = ', ts_end-ts_start, 'ms');
console.log('total data = ', ts_data-ts_start, 'ms');
console.log('total algorithm = ', ts_end-ts_data, 'ms');
