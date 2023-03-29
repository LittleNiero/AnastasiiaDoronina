"use strict";

const INTEREST_RATE = 0.05;
const MONTHS = 12;

let userDeposit = Number(prompt("Ваш депозит"));
let userMonths = 2;

let userIncome = userDeposit * INTEREST_RATE / MONTHS * userMonths;
alert(userIncome.toFixed(2));