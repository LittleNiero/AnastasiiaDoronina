"use strict";

let date = new Date(2018, 9, 12, 1, 0, 0);

function consoleDate() {
    console.log(date.toString());
};

function setSeconds() {
    date.setSeconds(prompt("set seconds"));
};

function setMinutes() {
    date.setMinutes(prompt("set minutes"));
};

function setHours() {
    date.setHours(prompt("set hours"));
};

consoleDate();

setSeconds();
// setMinutes();
// setHours();

consoleDate();