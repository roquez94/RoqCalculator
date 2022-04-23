///calculator functions to call
// const add = function(first, second) {
// 	let sum = first + second;
//   return sum;
// };

// const subtract = function(first, second) {
// 	let diff = first - second;
//   return diff; 
// };

// const multiply = function(first, second) {
//   let product = first * second;
//   return product;
// };

// const power = function(first,second) {
// 	let powNum = 1;
//   for (let i = 1; i <= second;  i++) {
//     powNum *= first;
//   }
//   return powNum;
// };

// const divide = function(first,second){
//   let quotient = first % second;
//   return quotient;
// };

//displays current input BEFORE calculating
let display = document.getElementById('display');

//operation button press
let calculator = document.querySelector('.calculator');

  calculator.addEventListener('click', e => {
    if (e.target.matches('button')) {
      const key = e.target;
      const action = key.dataset.action;
      
      if(!action){
        console.log('number key!');
      }
      
      if (action === 'plus' || action === 'subtract' ||
       action === 'multiply' || action === 'divide'){
      console.log("operator key!");
       } 

      if (action === 'decimal'){
        console.log('decimal key!');
      }

      if (action === 'clear'){
        console.log('reset key!');
      }

      if(action === 'equal'){
        console.log('equal key!')
      }
    }
});

//operations button, takes 2 #s and calls on above functions 
let first;
let second;
let oppButton;
let tempNum;

// let operation = (first) => {
//   first = display;
//  currentNum.display.removeChild(currentNum);
// };

let equal = (second) => {
  second = display;
  oppButton(first,second);
  display.removeChild(display);
  display.textContent = `${oppButton}`
};

//arithmetic button


//number button press operations

//clear button. Resets display and current arithmetic
