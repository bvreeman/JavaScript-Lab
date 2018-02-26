// JavaScript Document

function init() {
    document.getElementById("textOutput").innerHTML = "Enter your name and then click the button.";
}

function clickButton() {
    let name = document.getElementById("textEntry").value;

    document.getElementById("textOutput").innerHTML = createGreeting(name);
}

function createGreeting(newName) {
    let greeting = "Hello, " + newName + "!";
    return greeting;
}