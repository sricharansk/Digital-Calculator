let currentExpression = ''; // Store the entire expression
let currentOperator = '';
let currentResult = 0;

function appendNumber(number) {
  currentExpression += number; // Append the number to the expression
  updateDisplay(currentExpression);
}

function appendOperator(operator) {
  if (currentExpression !== '') {
    if (currentOperator !== '') {
      calculate();
    }
    currentOperator = operator;
    currentResult = parseFloat(currentExpression);
    currentExpression += operator; // Append the operator to the expression
    updateDisplay(currentExpression);
  }
}

function calculate() {
  if (currentExpression !== '') {
    const inputNumber = parseFloat(currentExpression.slice(currentResult.toString().length));
    switch (currentOperator) {
      case '+':
        currentResult += inputNumber;
        break;
      case '-':
        currentResult -= inputNumber;
        break;
      case '*':
        currentResult *= inputNumber;
        break;
      case '/':
        currentResult /= inputNumber;
        break;
      case '**':
        currentResult = Math.pow(currentResult, inputNumber);
        break;
    }
    updateDisplay(currentResult);
    currentExpression = currentResult.toString();
    currentOperator = '';
  }
}

function clearDisplay() {
  currentExpression = '';
  currentOperator = '';
  currentResult = 0;
  updateDisplay(currentResult);
}

function backspace() {
  currentExpression = currentExpression.slice(0, -1);
  updateDisplay(currentExpression);
}

function updateDisplay(content) {
  document.getElementById('display').innerText = content !== '' ? content : '0';
}
