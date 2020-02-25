console.log('secret word')

var alphabetO = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var alphabetS = ["D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C"]

var crackSecret = function (word) {
    
    var wordSplit = word.split('')
    var code = []
    var decode = []
    
    for (var i = 0; i < wordSplit.length; i++) {
        code.push(alphabetS.indexOf(wordSplit[i]))
        decode.push(alphabetO[code[i]])   
    }
    return decode.join('')
}

console.log(crackSecret('NQRZOHGJH LV OLPLWHG. LPDJLQDWLRQ HQFLUFOHV WKH ZRUOG'))
console.log(crackSecret('ERQXV ILIWHHQ PLQXWHV EUHDN'))