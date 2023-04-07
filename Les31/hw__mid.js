"use strict"


const USER_NUMBER = prompt("Введіть п'ятирозрядне число");

define_palindrome:
if (USER_NUMBER.length === 5) {

    for (let i = 0; i < USER_NUMBER.length / 2; i++) {

        if (USER_NUMBER[i] !== USER_NUMBER[USER_NUMBER.length - 1 - i]) {
            alert(`Число ${USER_NUMBER} не є паліндромом`);
            break define_palindrome;
        };

    };
    alert(`Число ${USER_NUMBER} є паліндромом`);
};


/*
let purchaseSum = +prompt("Сумма покупки");
if (purchaseSum >= 200 && purchaseSum < 300) {
    alert(`До сплати ${(purchaseSum - purchaseSum * 0.03).toFixed(2)}`)
} else if (purchaseSum >= 300 && purchaseSum < 500) {
    alert(`До сплати ${(purchaseSum - purchaseSum * 0.05).toFixed(2)}`)
} else if (purchaseSum >= 500) {
    alert(`До сплати ${(purchaseSum - purchaseSum * 0.07).toFixed(2)}`)
} else {
    alert ("Ви не отримали знижку(");
};
*/


/*
const USER_NUMBERS = prompt("Введи числа, розділяючи їх пробілами");
const NUMBERS_ARRAY = USER_NUMBERS.split(" ");

let positiveNumbers = null,
    negativeNumbers = null,
    oddNumbers = null,
    evenNumbers = null,
    zeros = null;

for (let i = 0; i < NUMBERS_ARRAY.length; i++) {

    if (NUMBERS_ARRAY[i] > 0) {
        positiveNumbers++;
    } else if (NUMBERS_ARRAY[i] < 0) {
        negativeNumbers++;
    } else {
        zeros++;
    }

    if ( (NUMBERS_ARRAY[i] != 0) && (NUMBERS_ARRAY[i] % 2 === 0)) {
        oddNumbers++;
    } else if (NUMBERS_ARRAY[i] % 2 !== 0) {
        evenNumbers++;
    }
}
alert(`додатні ${positiveNumbers}, від'ємні ${negativeNumbers}, парні ${oddNumbers}, непарні ${evenNumbers}, нулі ${zeros}`);
*/


/*
const WEEK = ["Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота", "Неділя"];

week_confirm:
for (let i = 0; i < WEEK.length; i++) {
    
    if (confirm( `${WEEK[i]}. Хочеш побачити наступний день?` ) === false) {
        break week_confirm;
    };
}
*/