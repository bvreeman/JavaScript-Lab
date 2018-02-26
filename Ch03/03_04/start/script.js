// JavaScript Document

if (true || false) {
    console.log("only one value needs to be true in an OR statement for the whole evaluation to be true.");
}

if  (true && false) {
    
} else {
    console.log("both values need to be true for an AND statement to be true.");
}

let myMaxLimit = 20;
let myMinLimit = 5;

let myValue = 19;

if (myValue < myMaxLimit && myValue > myMinLimit) {
    console.log("the value " + myValue + " is between " + myMinLimit + " and " + myMaxLimit);
} else {
    console.log("The value " + myValue + " is not between " + myMinLimit + " and " + myMaxLimit);
}

let myMaxXLimit = 5;
let myMinXLimit = 1;
let myMaxYLimit = 5;
let myMinYLimit = 1;

let myXValue = 4;
let myYValue = 2;

if ((myXValue < myMaxXLimit && myXValue > myMinXLimit) && (myYValue < myMaxYLimit && myYValue > myMinYLimit)) {
    console.log("Both the x and y values are within the limits");
} else {
    console.log("One or both of the x and y values are outside of the limits");
}

let myBoolean = false;
if (!myBoolean) {
    console.log("NOT false is true");
}

