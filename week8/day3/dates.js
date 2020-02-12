
let currentYear = 2020;

let months = {
    01: 'January',
    02: 'February',
    03: 'March',
    04: 'April',
    05: 'May',
    06: 'June',
    07: 'July',
    08: 'August',
    09: 'September',
    10: 'October',
    11: 'November',
    12: 'December'
}

let friendlyDates = []
let makeFriendlyDates = function (array) {

    for (let i = 0; i < array.length; i++) {
        let date = array[i].split('-')
        
        if (Number(date[0]) === currentYear) {
            friendlyDates.push(`${months[Number(date[1])]} ${date[2]}`)
        } else {
            friendlyDates.push(`${months[Number(date[1])]} ${date[2]}, ${date[0]}`)
        }
    }
    return friendlyDates
}


console.log(makeFriendlyDates(["2016-07-01", "2018-07-04"]))
console.log(makeFriendlyDates(["2020-07-01", "2020-07-04"]))