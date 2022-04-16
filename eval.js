//calculator functions to call

const add = function(first, second) {
	let sum = first + second;
  return sum;
};

const subtract = function(first, second) {
	let diff = first - second;
  return diff; 
};

const sum = function(array) {
	let sumArray = 0;
  for (let key in array) {
    sumArray += array[key];
  }
  return sumArray;
};

const multiply = function(mult) {
  let product = 1;
  for (let number in mult) {
    product *= mult[number];
  }
  return product;
};

const power = function(first,second) {
	let powNum = 1;
  for (let i = 1; i <= second;  i++) {
    powNum *= first;
  }
  return powNum;
};

const factorial = function(number) {
	let fact = 1;
    for (let n = 0; n < number; n++) {
      fact *= (number - n);
    }
    return fact;
};

//operations button, takes 2 #s and calls on above functions 