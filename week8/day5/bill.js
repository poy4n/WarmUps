
let group = {
    A: 20, 
    B: 15, 
    C: 10,
    D: 40
}

// const entries = Object.values(entries)

let calculateBill = function (object) {

    const names = Object.keys(object)
    const share = Object.values(object)
    
    let reduce = share.reduce((total, money) => money  - total)
    console.log(reduce);

    let bill = {}
    
    names.forEach((name, index) => bill[name] = share[index] - reduce)

    return bill
}
console.log(calculateBill(group))