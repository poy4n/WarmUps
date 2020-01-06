console.log('2020');

// Return true if the given string is a palindrome. 
// Otherwise, return false.

var palindrome = function(str) {

    var noSpaceStr = str.split(' ').join('');
    var lowerStr = noSpaceStr.toLowerCase();
    var splitStr = lowerStr.split('');
    var reverseStr = splitStr.reverse();
    var joinStr = reverseStr.join('');

    return lowerStr === joinStr;
};

console.log(palindrome('Eye'));
console.log(palindrome('aNna'));
console.log(palindrome('Bus'));
console.log(palindrome('Was It A Rat I Saw'));