console.log('warmup')

//  1
var drinkingTest = function (age) {
    var age = prompt('your age')
    if (age < 18) {
        return 'chips for you';
    } else {
        return 'cheers';
    }
}

console.log(drinkingTest());

// 2
var airCon = function () {
    var currentTemp = Number(prompt('current'));
    var desiredTemp = Number(prompt('desired'));
    var aircon = prompt('is AC working?')

    if (currentTemp > desiredTemp && aircon === 'yes') {
        return 'turn on the A/C pls'
    }   else if (currentTemp > desiredTemp && aircon !== 'yes') {
        return 'fix the A/C now, its hot'
    }   else if (currentTemp < desiredTemp && aircon !== 'yes') {
        return 'fix the A/C wnehever you have the chance, its cool'
    }   else { // otherwise you get undefined
        return 'oops'
    }
}
console.log(airCon());

// 3

var suburb;
do { // defines the loop
    suburb = prompt('where do you live?')
    if (suburb.trim() !== '') { // trim remove white space
        console.log("oh you live in " + suburb);
    }   else {
        alert ('write your suburb');
    }
} while (suburb.trim() === '');

