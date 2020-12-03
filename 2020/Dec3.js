var data;

function prepareData() {
    var input = $('#input').val();
    data = input.split("\n");
}

function exercise1() {
    prepareData();
    var trees = checkTrees(3,1);
    $('#result1').val(trees + "\n");
}

function exercise2() {
    prepareData();
    var result = 1;
    result *=  checkTrees(1,1);
    result *=  checkTrees(3,1);
    result *=  checkTrees(5,1);
    result *=  checkTrees(7,1);
    result *=  checkTrees(1,2);
    $('#result2').val(result);
}

function checkTrees(right, down) {
    var trees = 0;
    var pos = 0, started = false;
    for( var i = 0; i < data.length; i += down) {
        if( started ) {
            var newpos = pos + right;
            if( newpos >= data[i].length ) {
                pos = newpos - data[i].length;
            }
            else
                pos = newpos;

            if( data[i].charAt(pos) == '#' )
                trees++;
        }
        else
            started = true;
    }

    return trees;
}