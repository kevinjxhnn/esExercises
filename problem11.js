/* Create a function sum that takes any number of numbers as arguments 
and calculates the sum of the input numbers using the rest parameter syntax */

function sumAny(...numbers) {
  const sum = numbers.reduce( (acc, num) => {
    acc = acc + num;

    return acc
  }, 0);

  console.log(sum)
}

module.exports = {sumAny}
