// function hello() {
//     console.log("Hello World!");
// }

// hello(); // invokes the function hello.

// hello();
// hello();
// hello();

// function numberEntered (num) {
//     console.log('The number you entered was: ${num}');
// }

// numberEntered(5);
// numberEntered(4);
// numberEntered(3);
// numberEntered(2);
// numberEntered(1);

// function addAnyTwoNumbers (num1, num2) {
//     console.log(num1 + num2);
// }

// addAnyTwoNumbers(4, 5);
// addAnyTwoNumbers(6, 11);
// addAnyTwoNumbers(7, 8);

// function subtractTwoNumbers (firstNum, secondNum) {
//     console.log(firstNum - secondNum);
// }

// // Call it
// subtractTwoNumbers(5, 7);
// subtractTwoNumbers(29, 10);
// subtractTwoNumbers(10, 2);

// function getMyBattingAverage (atBats, numberOfHits) {
//     let myAverage = numberOfHits / atBats;
//     return myAverage;
// }

// console.log(getMyBattingAverage(250, 91)); // = 0.364


function add(x ,y) {
    let sum = x + y;
    return sum;
}

console.log(add(1,1));

function fullName(first, last) {
    let wholeName = first + " " + last;
    return wholeName;
}

console.log(fullName("Zach", "Dearmin"));

function calculatePrice(quantity, price) {
    let totalPrice = 1.07 * quantity * price;
    return totalPrice;
}

console.log(calculatePrice(17, 5));