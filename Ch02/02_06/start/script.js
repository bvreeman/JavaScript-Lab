// JavaScript Document

let subtotal = 15.00;

console.log("Subtotal: " + subtotal);

let total = subtotal + calculateTax(0.08, subtotal);

console.log("Total: " + total);

function calculateTax(taxRate, amountToTax) {
    let tax = amountToTax * taxRate;
    console.log("Tax: " + tax);
    return tax;
}