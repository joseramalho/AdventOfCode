var data;

function prepareData() {
    var input = $('#input').val();
    data = input.split("\n");
    data = data.map( e => {
        let l = e.split(" ");
        let limits = l[0].split("-").map(n => parseInt(n));

        return {min: limits[0], max: limits[1], char: l[1].charAt(0), password: l[2]};
    });
}

function exercise1() {
    prepareData();
    var validPasswords = 0;
    data.forEach(e => {
        let count = e.password.split(e.char).length;
        if( count >= e.min && count <= e.max )
            validPasswords++;
    });
    $('#result1').val(validPasswords);
}

function exercise2() {
    prepareData();
    var validPasswords = 0;
    data.forEach(e => {
        if( e.password[e.min-1] == e.char && e.password[e.max-1] != e.char || e.password[e.min-1] != e.char && e.password[e.max-1] == e.char)
            validPasswords++;
    });
    $('#result2').val(validPasswords);
}
