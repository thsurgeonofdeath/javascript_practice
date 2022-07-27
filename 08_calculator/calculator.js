const add = function(a, b) {
	return a +b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(array) {
    return array.reduce((total, current) =>
      total + current,0);
};

const multiply = function(numbers) {
  if( numbers.length) return  numbers.reduce((total, number) => total * number);
  return 0;
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(number) {
  if(number == 0 || number == 1) return 1;
  else if (number > 1){
    let result = 1;
    for( let i=number; i > 0; i--){
      result *= i;
    }
    return result;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
