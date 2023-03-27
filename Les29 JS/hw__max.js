"use strict";

let circleRadius = prompt("Введи радіус кола", "см");
let circlePerimeter = Math.PI * Math.pow(circleRadius, 2);
alert("Периметр твого кола = " + circlePerimeter + "см²");


let roadDistance = prompt("Довжина дороги", "км");
let roadTime = prompt("Час дороги", "год");

let speed = roadDistance / roadTime;
alert("Потрібно їхати зі швидкістю " + speed + "км/год");


const USD_TO_EUR = 0.93;

let usdSum = prompt("Скільки $ ви хочете перевести?", "1");
let eurSum = usdSum * USD_TO_EUR;
alert("Ваші " + eurSum + "€");