const repeatString = function(word,number) {

    if(number < 0) return "ERROR";
    let repeat ="";
    for (i=0; i<number; i++){
        repeat = repeat.concat(word);
    }

    return repeat;
};

// Do not edit below this line
module.exports = repeatString;
