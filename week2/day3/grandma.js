console.log('warm day')

var year = function() {
    var minYear = 1930;
    var maxYear = 1950;
    var randomYear = Math.floor(Math.random()*(maxYear - minYear + 1)) + minYear;
    return randomYear
}

console.log(year());

var talkEvaluation = function (talk) {
    var refTalk = talk.toUpperCase();
    return refTalk === talk ? true : false;
}

var grandmaRes = function () {
    var grandmaTalk = '';
    var sonnyTalk = 'good morning';
    while (sonnyTalk != 'BYE') {
            sonnyTalk = prompt('please talk to your grandma!');
            grandmaTalk = talkEvaluation(sonnyTalk) ? `no, not since ${year()}` : 'huh? speak up,'
            console.log(grandmaTalk);
        if (sonnyTalk == 'BYE') {
            console.log('bye, Sonny');
        }
    }
}

console.log(grandmaRes());
