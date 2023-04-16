"use strict";

const perfectNumber = function(number) {
    let divisorsSum = 0;
    for (let i = 1; i <=number/2; i++) {
        if (number%i === 0) {
            divisorsSum += i;
        };  
    };
    if (divisorsSum !==0 && divisorsSum === number) {
        return true;
    } else {
        return false;
    };
};

if (perfectNumber(6)) {
    console.log("досконале");
} else {
    console.log ("недосконале");
};

const perfectNumbers = function (start, end) {
    
        for (let j = start; j <= end; j++) {
            if (perfectNumber(j)) {
                console.log(j);
            }
        };
    
    };
perfectNumbers(2, 8129);