console.log('square');

var getSquares = function (array) {
    squareNum = []
    for(var i = 0; i < array.length; i++){
        if (array[i] % Math.sqrt(array[i]) === 0) {
            squareNum.push(array[i]);
        } 
    }
    var sortNum = squareNum.sort((a, b) => (a > b) ? 1 : -1);

    var uniqueNum = [...new Set(sortNum)];
    return uniqueNum
}

console.log(getSquares([4, 1, 16, 1, 10, 25, 22]));