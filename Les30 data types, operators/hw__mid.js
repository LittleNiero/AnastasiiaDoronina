"use strict";

let userMoney = Number( prompt("Ваші кошти") );
let chocolatePrice = Number( prompt("Ціна шоколадки") );

alert( `Ви можете купити ${ ( userMoney / chocolatePrice ).toFixed(0) }` );
alert( `Ваша решта ${ ( userMoney % chocolatePrice ).toFixed(2) }` );


// let number = Number((prompt("Введи трьохзначне число")).substr(0, 3));

// let firstNumber = (number % 10) * 100;
// let middleNumber = (number % 100 - number % 10);
// let lastNumber = (number - number % 100) / 100;

// alert(firstNumber + middleNumber + lastNumber);
