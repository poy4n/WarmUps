
var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
var animals = ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]


var gooseFilter = function(array) {

    var filtered = []

    array.filter(function(animal) {
        if (geese.includes(animal) !== true) {
            filtered.push(animal)
        }
    })
    return filtered
}

console.log(gooseFilter(animals))