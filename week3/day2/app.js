// Create 3 boxes (divs) in an html file, give them a border of 1px solid black 
// and a height and width of 100px, so you can see them.
// When you click on any box, it's background color should immediately become red.
// After every box has been clicked, change all of them immediately to green

var box1 = document.querySelector('.box1');
var box2 = document.querySelector('.box2');
var box3 = document.querySelector('.box3');

var allGreen = function() {
    if (
        box1.style.backgroundColor === 'red' &&
        box2.style.backgroundColor === 'red' &&
        box3.style.backgroundColor === 'red')
    {
        box1.style.backgroundColor = 'green'
        box2.style.backgroundColor = 'green'
        box3.style.backgroundColor = 'green'
    }
}

var Red1 = function() {
    box1.style.backgroundColor = 'red'
}

box1.addEventListener('click', Red1);
box1.addEventListener('click', allGreen);

var Red2 = function() {
    box2.style.backgroundColor = 'red'
}   

box2.addEventListener('click', Red2);
box2.addEventListener('click', allGreen);

var Red3 = function() {
    box3.style.backgroundColor = 'red'
}

box3.addEventListener('click', Red3);
box3.addEventListener('click', allGreen);

/*
this code can replace all three RED functions

var Red = function(event) {
    var boxThatGotClicked = event.target
    boxThatGotClicked.style.background = 'Red'
}   
*/