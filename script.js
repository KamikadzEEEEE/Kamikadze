const btn1 = document.getElementById("1");
const btn2 = document.getElementById("2");
const btn3 = document.getElementById("3");
const btn4 = document.getElementById("4");
const btn5 = document.getElementById("5");
const btn6 = document.getElementById("6");
const btn7 = document.getElementById("7");
const btn8 = document.getElementById("8");
const btn9 = document.getElementById("9");
const btn0 = document.getElementById("0");
const btnToThePowerOf = document.getElementById("^");
const btnDivideBy = document.getElementById("/");
const btnTimes = document.getElementById("X");
const btnMinus = document.getElementById("-");
const btnPlus = document.getElementById("+");
const btnEquals = document.getElementById("=");
const btnReset = document.getElementById("reset");
const numberButtons = [btn0, btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9];
const operatorButtons = [btnToThePowerOf, btnDivideBy, btnTimes, btnMinus, btnPlus];

const mainOutput = document.getElementById("output-main");
const sideOutput = document.getElementById("output-side");

let number1 = 0;
let number2 = 0;
let operator = "";

function getNumber1(btnValue, number) {
    const help = number.toString().split("");

    if (!(help.length >= 11)) {
        if (number === 0) {
            number = "";
        }
        const addedNumber = number.toString() + btnValue.toString();
        return parseInt(addedNumber);
    } else {
        return number;
    }
}

function getNumber2(btnValue, number) {
    const help = number.toString().split("");

    if (!(help.length >= 11)) {
        if (number === 0) {
            number = "";
        }
        const addedNumber = number.toString() + btnValue.toString();
        return parseInt(addedNumber);
    } else {
        return number;
    }
}

function getOperator(operator) {
    switch (operator) {
        case "^":
            return "^";
        case "/":
            return "/";
        case "X":
            return "X";
        case "-":
            return "-";
        case "+":
            return "+";
        default:
            return "coś jest nie tak"
    }
}

function executeNumber1(value) {
    number1 = getNumber1(value, number1);
    mainOutput.textContent = number1.toString();
}

function executeNumber2(value) {
    number2 = getNumber2(value, number2);
    mainOutput.textContent = number2.toString();
}

function executeOperator(operation) {
    if (number2 !== 0) {
        executeEqual();
    }
    operator = getOperator(`${operation}`);
    sideOutput.textContent = number1.toString() + operator;
    mainOutput.textContent = operator;
}

function executeNumberEventListener(value) {
    if (operator === "") {
        executeNumber1(value);
    } else {
        executeNumber2(value);
    }
}

function executeEqual() {
    function executeResult(result) {
        mainOutput.textContent = result.toString();
        number2 = 0;
        if (mainOutput.textContent === "NaN") {
            mainOutput.textContent = "jesteś idiotą";
        } else if (mainOutput.textContent.length > 13) {
            mainOutput.textContent = "sorry";
            sideOutput.textContent = "Patryk z siódemki przegryzł kable";
        }
    };
    switch (operator) {
        case "^":
            number1 = number1 ** number2;
            executeResult(number1);
            break;
        case "/":
                number1 = number1 / number2;
                executeResult(number1);
            break;
        case "X":
            number1 = number1 * number2;
            executeResult(number1);
            break;
        case "-":
            number1 = number1 - number2;
            executeResult(number1);
            break;
        case "+":
            number1 = number1 + number2;
            executeResult(number1);
            break;
        default:
            sideOutput.textContent = "jak niby?";
    }
}

numberButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        executeNumberEventListener(index);
    });
});

operatorButtons.forEach((button, index) => {
    let operationMark;
    if (index === 0) {
        operationMark = "^"
    } else if (index === 1) {
        operationMark = "/"
    } else if (index === 2) {
        operationMark = "X";
    } else if (index === 3) {
        operationMark = "-"
    } else if (index === 4) {
        operationMark = "+"
    } else {
        sideOutput.textContent = "jakim cudem?";
    }
    button.addEventListener("click", () => {
        executeOperator(operationMark);
    });
});

btnEquals.addEventListener("click", () => {
    executeEqual();
});

btnReset.addEventListener("click", () => {
    number1 = 0;
    number2 = 0;
    operator = "";
    mainOutput.textContent = 0;
    sideOutput.textContent = 0;
});

document.addEventListener("click", () => {
    console.log(number1, number1, operator, mainOutput.textContent, sideOutput.textContent);
});