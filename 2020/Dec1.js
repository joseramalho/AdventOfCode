var data;

function prepareData() {
    var input = $('#input').val();
    data = input.split("\n").map(e => parseInt(e));
}

function exercise1() {
    prepareData();
    $('#result1').val(computeEx1());
}

function exercise2() {
    prepareData();
    $('#result2').val(computeEx2());
}

function computeEx1() {
    let min = 2020;
    data.forEach(element => {
        if( element < min ) {
            min = element;
        }
    });

    let relevant = data.filter(e => e <= (2020-min));

    for(var i = 0; i < relevant.length; i++ )
        for(var j = 0; j < relevant.length; j++ )
            if( relevant[i] + relevant[j] == 2020 ) {
                return relevant[i] * relevant[j];
            }
}

function computeEx2() {
    let min = 2020;
    data.forEach(element => {
        if( element < min ) {
            min = element;
        }
    });

    let relevant = data.filter(e => e <= (2020-min));

    for(var i = 0; i < relevant.length; i++ )
        for(var j = 0; j < relevant.length; j++ )
            for(var k = 0; k < relevant.length; k++ )
                if( relevant[i] + relevant[j] + relevant[k] == 2020 ) {
                    return relevant[i] * relevant[j] * relevant[k];
                }
}