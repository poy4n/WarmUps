
let s1 = "xyaabbbccccdefww"
let s2 = "xxxxyyyyabklmopq"

function longest(s1, s2) { 
    return [...new Set(s1+s2)].sort().join('')
}

console.log(longest(s1, s2))