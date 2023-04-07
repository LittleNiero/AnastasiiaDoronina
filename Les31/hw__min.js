"use strict"


const USER_AGE = +prompt("Вкажіть ваш вік","0");

if (typeof(USER_AGE) === "number" && USER_AGE > 0) {
    if (USER_AGE > 0 && USER_AGE <= 11) {
        alert("Ви дитина");
    } else if (USER_AGE >= 12 && USER_AGE <= 17) {
        alert("Ви підліток");
    } else if (USER_AGE >= 18 && USER_AGE <= 59) {
        alert("Ви дорослий");
    } else {
        alert("Ви пенсіонер"); 
    };
} else {
    alert("Такого віку немає(");
};


/* 
const SYMBOL = (prompt("Номер символу", "0"));

switch (SYMBOL) {

    case "1": 
        alert("!");
        break;

    case "2":
        alert("@");
        break;

    case "3":
        alert("#");
        break;

    case "4":
        alert("$");
        break;
        
    case "5": 
        alert("%");
        break;

    case "6":
        alert("^");
        break;

    case "7":
        alert("&");
        break;

    case "8":
        alert("*");
        break;

    case "9":
        alert("(");
        break;

    case "0": 
        alert(")");
        break;

    default:
        alert("такого спецсимволу немає((");
}
*/


/* 
const START_NUMBER = +prompt("Від");
const END_NUMBER = +prompt("До");
let totalSum = 0;

for (let i = START_NUMBER; i <= END_NUMBER; i++) {
    totalSum += i;
};

alert(totalSum);
*/


/* 
const FIRST_NUMBER = +prompt("Перше число");
const SECOND_NUMBER = +prompt("Друге число");

let greatestCommonDivisor = 0;

for (let i = 1; i <= FIRST_NUMBER && i <= SECOND_NUMBER; i++) {
    if (FIRST_NUMBER % i === 0 && SECOND_NUMBER % i === 0 ) {
        greatestCommonDivisor = i;
    };
}

alert(greatestCommonDivisor);
*/


/*
const USER_NUMBER = +prompt("Число");
let message = "";

for (let i = 1; i * 2 <= USER_NUMBER; i++) {

    if (USER_NUMBER % i === 0) {
        message += i + " ";
    };
};

alert(message);
*/
