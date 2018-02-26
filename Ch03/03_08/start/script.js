// JavaScript Document

var myArray = ["Doug", "Mike", "Janet", "Matt"];

for (let i = 0; i < myArray.length; i++) {
    console.log("Hello, " + myArray[i]);
}

for (let element of myArray) {
    console.log("Good bye, " + element);
}

