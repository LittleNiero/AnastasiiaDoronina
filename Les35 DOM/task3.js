"use strict"

const LIGHTS_COLLECTION = document.querySelector('.traffic-light').children;

let light = document.querySelector('.traffic-light__light');

let lightValue = 0;


function switchLights() {

    for (let color of LIGHTS_COLLECTION) {
        if (color.style) {
            color.removeAttribute('style');
        }
    }

    LIGHTS_COLLECTION[lightValue].style = 'opacity: 1;';

    lightValue++;
    
    if (lightValue >= 3) {
    lightValue = 0;
    return;
    };
}

document.querySelector('.switcher').addEventListener('click', switchLights);