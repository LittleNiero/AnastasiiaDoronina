"use strict";

let shoppingList = [

    {
        name: "cheese",
        amount: 3,
        "is purchased": true,
        price: 2.70,
        totalSum: 0,
    },
    {
        name: "milk",
        amount: 1,
        "is purchased": false,
        price: 1.50,
        totalSum: 0,
    },
    {
        name: "apples",
        amount: 2,
        "is purchased": true,
        price: 1,
        totalSum: 0,
    },
    {
        name: "porridge",
        amount: 1,
        "is purchased": false,
        price: 2.70,
        totalSum: 0,
    },

];


function totalSum() {
    let cloneList = shoppingList.map(function(product) {
        return Object.assign({}, product);
    });

    for (let item of cloneList) {
        item.totalSum = (item.price * item.amount).toFixed(2);
    };
    shoppingList = cloneList;
};

totalSum(shoppingList);

console.log(shoppingList);

/*
function sortProducts(list) { 

    list.sort(function(product1, product2) {
    return product1["is purchased"] - product2["is purchased"];
});

console.log("sorted:");
console.log(list);
};

sortProducts(shoppingList);
*/


/*
function IsPurschased(productName) {
    
    for (let item of shoppingList) {
        
        if (item["name"] == productName) {
            item["is purchased"] = true;
        };
    };
    console.log("product is purchased:")
    console.log(shoppingList);
};

IsPurschased("milk");
*/


/*
function deleteProduct (list, productName) {
    
    let cloneList = list.map(function(product) {
            return Object.assign({}, product);
        });

    for (let item of cloneList) {
        if (item["name"] == productName) {
            cloneList.splice(cloneList.indexOf(item), 1);
        };
    };
    console.log("product deleted:");
    console.log(cloneList);
};

deleteProduct(shoppingList, "apples");
*/


/* function addProduct(list, productName, amount, ispurchased, price) {
    
for (let item of list) {
    if (item["name"] == productName) {
        item["amount"] += amount;
        return;
    };
};

let purchase = Object.create({}, {
    name: {
        value: productName,
        enumerable: true,
        wtitable: true,
        configurable: true,
    },
    amount: {
        value: amount,
        enumerable: true,
        wtitable: true,
        configurable: true,
    },
    "is purchased": {
        value: ispurchased,
        enumerable: true,
        wtitable: true,
        configurable: true,
    },
    price: {
        value: price,
        enumerable: true,
        wtitable: true,
        configurable: true,
    },
    totalSum: {
        value: 0,
        enumerable: true,
        wtitable: true,
        configurable: true,
    },
});

list.push(purchase);
totalSum();
console.log("product added:");
console.log(shoppingList);
};

addProduct(shoppingList, "ice cream", 2, true, 1.2);
*/
