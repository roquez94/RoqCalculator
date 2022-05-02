//displays current input BEFORE calculating
let display = document.querySelector('#display');

//operation button press
let calculator = document.querySelector('.calculator');

  calculator.addEventListener('click', e => {
    if (e.target.matches('button')) {
      let key = e.target;
      let action = key.dataset.action;
      let keyContent = key.textContent;
      let displayNum = display.textContent;
      let previousKeyType = calculator.dataset.previousKeyType;
      
      let firstValue = calculator.dataset.firstValue;
      let secondValue = displayNum;
      let operations = calculator.dataset.operations;
      let calcValue = calculate(firstValue, operations, secondValue);

      if(!action){
        if (displayNum === '0' || previousKeyType === 'operations' || previousKeyType === 'equal') {
          display.textContent = keyContent; 
      } else {
        display.textContent = displayNum + keyContent;
      }
        console.log('number key!');
        calculator.dataset.previousKeyType = 'number';
    }
      
      if (action === 'plus' || action === 'subtract' ||
       action === 'multiply' || action === 'divide'){
        console.log("operator key!");
        
      //Checks for 1st value and operator since 2nd value ALWAYS exist
      if (firstValue && operations && previousKeyType !== 'operations' && previousKeyType !== 'equal'){  
        calcValue;
        display.textContent = calcValue;
      //Update calculated value as firstValue
      calculator.dataset.firstValue = calcValue;
      } else {
      //If there are no calculations, set displayNum as the 1stValue
      calculator.dataset.firstValue = displayNum;
        }

      calculator.dataset.previousKeyType = 'operations';
      calculator.dataset.operations = action;
       } 

      if (action === 'decimal'){
        console.log('decimal key!');
        calculator.dataset.previousKeyType = 'decimal';
        
      //Do nothing if string has a dot
        if(!displayNum.includes('.')) {
          display.textContent = displayNum + '.';
        } else if (previousKeyType === 'operations') {
            display.textContent = '0.';
        }
    }

      if (action === 'clear'){
    //reset calculator to initial state
        calculator.dataset.firstValue = '';
        calculator.dataset.modValue = '';
        calculator.dataset.operator = '';
        calculator.dataset.previousKeyType = '';
        
        display.textContent = 0;
        calculator.dataset.previousKeyType = 'clear';
        console.log('reset key!');
      }

      if(action === 'equal'){
        firstValue = calculator.dataset.firstValue;
        operations = calculator.dataset.operations;
        secondValue = displayNum;
        
      if (firstValue) {
        if (previousKeyType === 'equal'){
          firstValue = displayNum;
          secondValue = calculator.dataset.modValue;
        }
        display.textContent = calculate (firstValue, operations, secondValue);
      }
      console.log('equal key!');
        
      //Set modValue attribute
      calculator.dataset.modValue = secondValue;
      calculator.dataset.previousKeyType = 'equal';
       }

    } //End of e.target matches button arrow function
});

  //Calculate Function, 1st number, operator, and 2nd number
      let calculate = (n1, operator, n2) => {
    
    //Perform calculation and return value
    const firstNum = parseFloat(n1);
    const secondNum = parseFloat(n2);
    if (operator === 'plus') return firstNum + secondNum;
    if (operator === 'subtract') return firstNum - secondNum;
    if (operator === 'multiply') return firstNum * secondNum;
    if (operator === 'divide') return firstNum / secondNum;
        
      }