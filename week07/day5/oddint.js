const numbers = [20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]

for (let i = 0; i < numbers.length; i++) {

    const count = numbers.filter(num => num === numbers[i]).length;

    if (count % 2 === 1) {
        var result = numbers[i]
    }
}

console.log(result)