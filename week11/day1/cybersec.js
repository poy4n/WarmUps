
const fs = require('fs');

let file = fs.readFileSync(`${process.argv[2]}`)

// object keys seperated from the lines
// an array of data is prepared

let lines = file.toString().split('\n')
let pairs = lines[0].split(',')

pairs.shift()
pairs.splice(1, 1, 'unitPrice')
lines.shift()

let dataObject = {}
let names = []
let drugArrays = []

// identifying each key pair value
lines.forEach(name => {
    
    let drugObject = {}
    let items = name.split(',')

    names.push(items[0]) 
    items.shift()

    pairs.forEach((key, index) => {
        drugObject[key] = items[index]
    })
    drugArrays.push(drugObject)
})
console.log(drugArrays)

// totalPrice >>> (Number(item[2]) * Number(item[3])).toFixed(2)

names.forEach((name, index) => dataObject[name] = [drugArrays[index]])

console.log(dataObject)