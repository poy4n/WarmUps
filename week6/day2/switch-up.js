console.log('up & down')

var switchup = function(string) {

    var updown = "";

    for(var i = 0; i < string.length; i++){

        var letter = string[i];

        if (letter === letter.toUpperCase()){
            updown += letter.toLowerCase();
        } else {
            updown += letter.toUpperCase();
        }           
    }
    return updown;
}

console.log(switchup("Switch caSe FoR eVery letter"));
console.log(switchup("js_Was_created_bY BRENdan Eich"));