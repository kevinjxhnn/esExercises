/* Use the spread syntax to expand an array of numbers and pass the 
elements of the array as arguments to the sum function created in the previous example */

const { sumAny } = require("./problem12");

const arr = [1, 2, 3, 4, 5, 6, 7];

sumAny(...arr);
