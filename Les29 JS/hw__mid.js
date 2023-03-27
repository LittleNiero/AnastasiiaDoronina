"use strict";

const CURRENT_YEAR = 2023;

let userName = prompt("Введіть ваше ім'я", "");
alert("Привіт, " + userName + "!");

let userBirth = prompt("Введіть рік народження", "");
let userAge = CURRENT_YEAR - userBirth;
alert("Тобі приблизно " + userAge + " років");

let squareSide = prompt("Введіть сторону квадрата", "");
let squarePerimeter = squareSide * 4;
alert("Периметр твого квадрату = " + squarePerimeter + "см²");
