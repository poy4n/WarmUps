console.log('heads or tails')

// Create a file called decider.js
// Write a function called coinFlip that will console.log HEADS or TAILS when called
// Add a counter that declares WINNER in the console when either HEADS or TAILS is flipped 5 times.

var heads = 0;
var tails = 0;

var coinFlip = function () {
   var random = Math.round(Math.random());
   if (random === 0) {
       console.log('Heads');
       heads++
   }
   else {
       console.log('Tails');
       tails++
   }
}

var winnerCount = function () {
    while (heads !==5 && tails !== 5) {
        coinFlip()
    }
    if (heads === 5) {
    console.log('Winner Heads')
    }
    else {
        console.log('Winner Tails')
    }
}

winnerCount();