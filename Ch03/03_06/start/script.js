// JavaScript Document

for (let i = 0; i < 25; i++) {
    console.log("The square of " + i + " is " + Math.pow(i,2));
}

/*
1   2   3   4   5   6   7   8   9   10  11  12
2   4   6   8   10  12  14  16  18  20  22  24
*/

for (let a = 1; a <= 12; a++) {

    let tableRow = "";

    for (let b = 1; b <= 12; b++) {
        let product = a*b;
        let productString = product.toString() + "\t"
        tableRow += productString;
    }

    console.log(tableRow);
}