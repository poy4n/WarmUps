//1
var current = 2019;
var birth = 1986;

console.log(`you are either ${current - birth -1} or ${current - birth} years old`)

//2
for (var i = 1; i <= 200; i++) {
    if (i%7 == 0) {
    console.log(i);
    }
}

//3
for (var i = 1919 ; i <= 2019; i++) {
    if (i%4 == 0) {
    console.log(i);
    }
}

//4
for (var i = 100; i <= 200; i++) {
    if (i % 2 == 1) {
    i = i + 2;
    console.log(i);
    }
}
