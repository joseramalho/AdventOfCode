var data;

function prepareData() {
    var input = $('#input').val();
    data = input.split("\n\n");
}

function exercise1() {
    prepareData();
    let valids = 0;
    data.forEach(e => {
        if(e.match(/byr:|iyr:|eyr:|hgt:|hcl:|ecl:|pid:/g).length == 7)
            valids++;
    });
    $('#result1').val(valids + "\n");
}

function exercise2() {
    prepareData();
    let valids = 0;
    data.forEach(e => {
        let v = 0;
        if(e.match(/byr:|iyr:|eyr:|hgt:|hcl:|ecl:|pid:/g).length == 7) {
            e = e.replace(/\n/g, " ");
            let p = e.split(" ");
            for( let i = 0; i < p.length; i++ ) {
                let kv = p[i].split(":");
                let value;
                switch( kv[0] ) {
                    case 'byr': 
                        value = parseInt(kv[1]);
                        if( value >= 1920 && value <= 2002)
                            v++;
                        break;
                    case 'iyr': 
                        value = parseInt(kv[1]);
                        if( value >= 2010 && value <= 2020)
                            v++;
                        break;
                    case 'eyr': 
                        value = parseInt(kv[1]);
                        if( value >= 2020 && value <= 2030)
                            v++;
                        break;
                    case 'hgt': 
                        if( kv[1].match(/15[0-9]cm|1[6-8][0-9]cm|19[0-3]cm|59in|6[0-9]in|7[0-6]in/g) != null)
                            v++;
                        break;
                    case 'hcl': 
                        if( kv[1].length == 7 && kv[1].match(/#[0-9a-z][0-9a-z][0-9a-z][0-9a-z][0-9a-z][0-9a-z]/g) != null)
                            v++;
                        break;
                    case 'ecl': 
                        switch (kv[1]){
                            case 'amb':
                            case 'blu':
                            case 'brn':
                            case 'gry':
                            case 'grn':
                            case 'hzl':
                            case 'oth':
                                v++;
                                break;
                            default: break;
                        }
                        break;
                    case 'pid': 
                        value = parseInt(kv[1]);
                        if( kv[1].length == 9 && value >= 0 && value <= 999999999)
                            v++;
                        break;
                    default:
                        break;
                }
            }

            if( v == 7 )
                valids++;
        }
    });
    $('#result2').val(valids);
}
