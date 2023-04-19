"use strict";

const car = {
    manufacturer: "Honda",
    model: "Honda Civic 1.5T MT Si",
    year: "2017",
    tank: 46,
    average_speed: 120,
    average_consumption: 4.9,
    drivers: [],

    info: function() {
        for (let value in car) {
            if ( car[value] === car.info ) {
                break;
            }
            console.log(value + ": " + car[value]);
        };
    },

    add_driver: function(driverName) {
        car.drivers.push(driverName);
    },

    check_driver: function(personName) {
        if (car.drivers.includes(personName)) {
            console.log("your name is on the list");
        } else {
        console.log("your name isn't on the list");
        }
    },

    calc_path: function(distance) {
        let consumptionPerKm = this.average_consumption / 100;
        let spentFuel = consumptionPerKm * distance;
        let roadTime = distance / this.average_speed;

        if (roadTime >= 4) {
            let addTime = roadTime / 4;
            roadTime += addTime;
        };
        
        console.log (`Fuel consumption: ${spentFuel.toFixed(2)} liters, Road time: ${roadTime.toFixed(2)} hours`);
    },
};

car.info();
// car.add_driver(prompt("driver name"));
// car.check_driver(prompt("driver name"));
// car.calc_path(prompt("Path length in km"));