
let qs = "?title=jaws&apikey=123456&page=5"

const queryStringToObject = function(string) {

    let pairs = qs.split(/[?&=]/g)
    let shifted = pairs.shift()
    console.log(pairs)       

    let keys = []
    let values = []
    let object = {};

    for (let i = 0; i < pairs.length; i++) {
        if( i % 2 === 0) {
            keys.push(pairs[i])
        } else {
            values.push(pairs[i])
        }   
    }
    keys.forEach((key, index) => object[key] = values[index])
    return object

}
console.log(queryStringToObject(qs))