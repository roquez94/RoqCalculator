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

      if(!action && displayNum === '0' || previousKeyType === 'operations')      {
          display.textContent = keyContent; 
      } else {
        display.textContent = displayNum + keyContent;
        console.log('number key!');
        calculator.dataset.previousKey = 'number';
      }
      
      if (action === 'plus' || action === 'subtract' ||
       action === 'multiply' || action === 'divide'){
        console.log("operator key!");
        
      //Checks for 1st value and operator since 2nd value ALWAYS exist
      if (firstValue && operations && previousKeyType !== 'operations'){          display.textContent = calcValue;
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
        calculator.dataset.previousKey = 'decimal';
      //Do nothing if string has a dot
        if(!displayNum.includes('.')) {
          if (previousKeyType === 'operations') {
          display.textContent = '0.';
        } else {
        display.textContent = displayNum + '.';
        } 
      }
    }

      if (action === 'clear'){
        calculator.dataset.previousKeyType = 'clear';
        console.log('reset key!');
      }

      if(action === 'equal'){
      display.textContent = calculate(firstValue, operations, secondValue);
        calculator.dataset.previousKeyType = 'equal';
        console.log('equal key!')
        
      if (firstValue) {
        if (previousKeyType === 'equal'){
          firstValue = displayNum;
          secondValue = calculator.dataset.modValue;
        }
        display.textContent = calculate (firstValue, operations, secondValue);
      }
      //Set modValue attribute
      calculator.dataset.modValue = secondValue;
      calculator.dataset.previousKeyType = 'equal';
       }

    }
});

  //Calculate Function, 1st number, operator, and 2nd number
      let calculate = (n1, operator, n2) => {
        //Perform calculation and return value
        let result = '';

        if (operator === 'plus'){
          result = parseFloat(n1) + parseFloat(n2);  
        }else if (operator === 'subtract') {
          result = parseFloat(n1) - parseFloat(n2);          
        } else if (operator === 'multiply') {
          result = parseFloat(n1) * parseFloat(n2);
        } else if (operator === 'divide'){
          result = parseFloat(n1) / parseFloat(n2);
        }
        return result;
      }