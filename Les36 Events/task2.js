"use strict"

let table = document.querySelector('.table');

let rows = Array.from(table.rows).slice(1);

let columnName = document.querySelector('.column-names__name');

let columnAge = document.querySelector('.column-names__age');

function sortNames() {
    let sortedRowsNames = rows.sort((rowA, rowB) => {
        if (rowA.cells[0].innerHTML < rowB.cells[0].innerHTML) {
            return -1;
        }; 
        if (rowA.cells[0].innerHTML > rowB.cells[0].innerHTML) {
            return 1;
        }; 
        return 0;
    });
    table.tBodies[0].append(...sortedRowsNames);
    };
    


let sortAges = function() {
let sortedRowsAges = rows.sort((rowA, rowB) => {
    return rowA.cells[1].innerHTML - rowB.cells[1].innerHTML; 
});
table.tBodies[0].append(...sortedRowsAges);
}

columnName.onclick = sortNames;

columnAge.onclick = sortAges;