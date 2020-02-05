
var map1 = [
    ["A","A","A","A","A"],
    ["A","A","A","A","A"],
    ["A","A","X","A","A"],
    ["A","A","A","A","A"],
    ["A","A","A","A","A"]
];

var map2 = [
    ["A","A","A","A","A"],
    ["A","A","A","A","A"],
    ["A","A","A","A","A"],
    ["A","A","A","A","A"],
    ["A","X","A","A","A"]
]

var map3 = [
    ["A","A","A","A","A"],
    ["A","A","V","A","A"],
    ["A","A","A","V","A"],
    ["v","v","V","v","X"],
    ["A","V","A","A","A"]
];

var map4 = [
    ["A","A","A","A","A"],
    ["A","A","V","A","A"],
    ["A","A","A","V","A"],
    ["v","v","V","v","A"],
    ["X","V","A","A","A"]
];

var treasureFinder = function (map) {

    var coordinates = []

    map.forEach(function(row, x) {
        row.forEach(function(ex, y) {
            if (ex === 'X') {
                coordinates.push(x, y)
            }
        });
    });
    return coordinates
}

// var treasureFinder = function (map) {

//     var coordinates = []

//     map.forEach(function(row) {

//         if (row.indexOf('X') !== -1) {
//             coordinates.push(map.indexOf(row))
//         }

//         row.forEach(function(ex) {
//             if (ex === 'X') {
//                 coordinates.push(row.indexOf(ex))
//             }
//         });
//     });
//     return coordinates
// }

console.log(treasureFinder(map1));
console.log(treasureFinder(map2));
console.log(treasureFinder(map3));
console.log(treasureFinder(map4));


