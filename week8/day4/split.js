
// space in a string is a character
// collect odd and even characters as looping

let encrypt = function (message, n) {
    
    let splitedMsg = message.split('')
    var even = []
    var odd = []
    
    if (n === 0) {
        console.log(message)
    } else {
        splitedMsg.forEach(function(letter, index) {
            if ((index + 1) % 2 === 0) {
                even.push(letter)
            } else {
                odd.push(letter)
            }
        })
        let encrypted = even.concat(odd).join(''); 
        return encrypt(encrypted, (n-1))
    }
}
encrypt("This is a test!", 0);
encrypt("This is a test!", 1);
encrypt("This is a test!", 2);
encrypt("This is a test!", 3);
encrypt("This is a test!", 4);