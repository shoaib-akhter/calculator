/* ============================
   CALCULATOR LOGIC - script.js
   ============================ */

// Selecting all required elements
const display = document.querySelector(".display");
const numberButtons = document.querySelectorAll(".digit");
const operatorButtons = document.querySelectorAll(".operator");
const equalButton = document.querySelector(".equal");
const clearButton = document.querySelector(".clear");
const backspaceButton = document.querySelector(".btn.back");
const decimalButton = document.querySelector(".btn.dot");

// Variables to store operands and operator
let firstOperand = "";
let secondOperand = "";
let currentOperator = null;
let shouldResetDisplay = false;

/* =======================
   NUMBER BUTTONS HANDLING
   ======================= */
function appendNumber(number) {
    if (shouldResetDisplay) {
        display.textContent = number; // Replace display after an operator
        shouldResetDisplay = false; 
    } else if (display.textContent === "0") {
        display.textContent = number; // Prevent leading zero
    } else {
        display.textContent += number;
    }
}

numberButtons.forEach(button => {
    button.addEventListener("click", () => appendNumber(button.textContent));
});

/* =================
   OPERATOR HANDLING
   ================= */
function setOperator(operator) {
    if (currentOperator !== null) evaluate(); // If operator exists, evaluate first
    
    const operatorMap = {
        "−": "-",   // Unicode minus correction
        "×": "*",   // Multiplication symbol to "*"
        "÷": "/",   // Division symbol to "/"
        "xⁿ": "**"  // Exponentiation
    };

    firstOperand = display.textContent;
    currentOperator = operatorMap[operator] || operator; // Convert if necessary
    shouldResetDisplay = true;
}

operatorButtons.forEach(button => {
    button.addEventListener("click", () => setOperator(button.textContent));
});

/* ===================
   EVALUATION FUNCTION
   =================== */
function evaluate() {
    if (currentOperator === null || shouldResetDisplay) return;
    
    secondOperand = display.textContent;
    let result = operate(currentOperator, parseFloat(firstOperand), parseFloat(secondOperand));
    
    display.textContent = roundNumber(result);
    firstOperand = display.textContent;
    currentOperator = null;
    shouldResetDisplay = true;
}

equalButton.addEventListener("click", evaluate);

/* ==================
   OPERATION FUNCTION
   ================== */
function operate(operator, a, b) {
    switch (operator) {
        case "+": return a + b;
        case "-": return a - b;
        case "*": return a * b;
        case "/": return b === 0 ? "Error" : a / b; // Prevent division by zero
        case "**": return Math.pow(a, b);
        default: return b;
    }
}

/* =================
   ROUNDING FUNCTION
   ================= */
function roundNumber(num) {
    return Math.round(num * 100000) / 100000; // Keeps up to 5 decimal places
}

/* ============================
   CLEAR & DELETE FUNCTIONALITY
   ============================ */
function clearCalculator() {
    display.textContent = "0";
    firstOperand = "";
    secondOperand = "";
    currentOperator = null;
    shouldResetDisplay = false;
}

clearButton.addEventListener("click", clearCalculator);

function deleteLastDigit() {
    if (display.textContent.length === 1 || display.textContent === "0") {
        display.textContent = "0"; // Reset to 0 when last digit removed
    } else {
        display.textContent = display.textContent.slice(0, -1);
    }
}

backspaceButton.addEventListener("click", deleteLastDigit);

/* ================
   DECIMAL HANDLING
   ================ */
function appendDecimal() {
    if (shouldResetDisplay) shouldResetDisplay = false;
    if (display.textContent.includes(".")) return; // Prevent multiple decimals
    display.textContent += ".";
}

decimalButton.addEventListener("click", appendDecimal);
