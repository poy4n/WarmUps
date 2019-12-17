console.log('morinig')

var days_of_the_week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

days_of_the_week.unshift('Sunday')
// days_of_the_week.splice(0, 0, 'Sunday')
days_of_the_week.pop('Sunday')

console.log(days_of_the_week)

/*
reordering - rotating Sunday
days_of_the_week.unshift(days_of_the_week.pop());
*/

//
var allDays = [
    ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], 
    ['Saturday', 'Sunday']
]

// use shif to keep weekDays and then sort

weekDays = allDays.slice(0, 1); // the result is array in an array [[]]
weekDays[0].sort(); // call out the index
console.log(weekDays);


// sort works
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();

