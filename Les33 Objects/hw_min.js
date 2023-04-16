"use strict";

const car = {
    manufacturer: "Honda",
    model: "Honda Civic 1.5T MT Si",
    year: "2017",
    tank: 46,
    "average speed": 120,
    "consumption per 100km": 4.9,
    driver: [],

    info: function() {
        for (let value in car) {
            if ( car[value] === car.info ) {
                break;
            }
            console.log(value + ": " + car[value]);
        };
    },

    "add driver": function(driverName) {
        driverName = prompt("driver name");
        car.driver.push(driverName);
    },

    "check driver": function(personName) {
        personName = prompt("your name");
        if (car.driver.includes(personName)) {
            console.log("your name is on the list");
        } else {
        console.log("your name isn't on the list");
        }
    },

    "calc path": function(distance) {
        distance = prompt("Path length in km");
        let consumptionPerKm = car["consumption per 100km"] / 100;
        let spentPetrol = consumptionPerKm * distance;
        let roadTime = distance / this["average speed"];

        if (roadTime >= 4) {
            let addTime = roadTime / 4;
            roadTime += addTime;
        };
        
        console.log (`Petrol consumption: ${spentPetrol.toFixed(2)} liters, Road time: ${roadTime.toFixed(2)} hours`);
    },
};

car.info();
// car["add driver"]();
// car["check driver"]();
// car["calc path"]();