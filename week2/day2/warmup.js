console.log('warm up')

var totalScores = function (scores) {
    var total = 0;
    for (i = 0; i < scores.length; i++) {
        total += scores[i];
    }
        return total
}
var bob = [3, 2, 6, 11, 9, 2, 6, 9, 10];
console.log(totalScores(bob));
var jimbo = [5, 12, 9, 22, 13, 7, 16, 10,11];
console.log(totalScores(jimbo));
var fish = [2, 2, 4, 5, 4, 3, 6, 4, 1];
console.log(totalScores(fish));

console.log(totalScores(bob) + totalScores(jimbo) + totalScores(fish));

// =============
var totalScores = function () {
    var total = 0;
    var y = bob.concat(jimbo);
    var z = y.concat(fish);
    for (i = 0; i < z.length; i++) {
        total += z[i]
    }
    return total
}
var bob = [3, 2, 6, 11, 9, 2, 6, 9, 10];
var jimbo = [5, 12, 9, 22, 13, 7, 16, 10,11];
var fish = [2, 2, 4, 5, 4, 3, 6, 4, 1];
console.log(totalScores());
// =============