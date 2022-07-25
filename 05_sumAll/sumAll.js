const sumAll = function(one,two) {

    let count = 0;
    let temp = 0;
    if(one<0 || two<0){
        return 'ERROR';
    }
    if(!Number.isInteger(one) || !Number.isInteger(two)){
        return 'ERROR';
    }

    if(one > two){
        temp = two;
        two = one;
        one = temp;
    }

    for(let i=one; i<=two; i++){
        count += i;
    }

    return count;
};

// Do not edit below this line
module.exports = sumAll;
