const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	return arr.reduce((acc, cur) => acc + cur, 0);
};

const multiply = function(arr) {
  return arr.reduce((acc, cur) => acc * cur, 1);

};

const power = function(base, expo) {
	return base ** expo;
};

const factorial = function(num) {
	if (num === 1 || num === 0) return 1;
  let sum = num;
  while (num > 1) {
    num--;
    sum *= num;
  }
  return sum;
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
