"use strict"

document.body.style.padding = 0;

let wrapper = document.querySelector('.wrapper');

wrapper.onmousedown = function(event) {
    wrapper.style.width = event.clientX + "px";
    wrapper.style.height = event.clientY + "px";

    function onMouseMove(event) {
        wrapper.style.width = event.clientX + "px";
        wrapper.style.height = event.clientY + "px";
    }

    document.addEventListener('mousemove', onMouseMove);

    wrapper.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        wrapper.onmouseup = null;
      };
};