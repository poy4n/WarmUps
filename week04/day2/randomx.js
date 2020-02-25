console.log('map');

var makeFakeMap = function(a, b) {

    var innerMap = []
    var mainMap = []
    var aX = Math.floor(Math.random() * a)
    var bX = Math.floor(Math.random() * b)
    
    for (var i = 0; i < a ; i++) {
        innerMap.push('#')  
    } 
    
    for (var j = 0; j < b; j++) {
        mainMap.push(innerMap.slice())
    }
    
    mainMap[aX].splice(bX, 1, 'X')

    return mainMap
}

console.log(makeFakeMap(4,4));