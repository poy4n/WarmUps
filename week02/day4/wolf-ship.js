console.log('WOOF WOOF')

var warnTheSheep = function (arr) {
     
    if (arr[arr.length - 1] === 'wolf') {
        return 'Pls go away and stop eating my sheep';
    }   else  {
        return `Oi! Sheep number ${arr.length - (arr.indexOf('wolf')-1)}! You are about to be eaten by a wolf!`;
    }  
}

console.log(warnTheSheep(["sheep", "sheep", "wolf", "sheep"]));
console.log(warnTheSheep(["sheep", "sheep", "sheep", "wolf"]));

// =========

var sheep = ["sheep", "sheep", "sheep", "sheep", "sheep", "sheep"];
var wolfPos = Math.floor(Math.random() * (sheep.length + 1));
console.log(wolfPos);

function warn(){
    sheep.splice(wolfPos, 0, 'Wolf');
    console.log(sheep);
    var warnSheep = (sheep.length - (sheep.indexOf("Wolf") + 1));
    if(warnSheep !== 0) {
        console.log(`Oi! Sheep number ${warnSheep}! You are about the be eaten by a wolf!`);
    } else {
        console.log(`Pls go away and stop eating my sheep`);
    }
}

warn();