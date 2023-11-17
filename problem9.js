// Show an example where an object is destructured using destructuring assignment in the function body

const destructured = (arr) => {
  let [, second, , fourth] = arr;

  return `second: ${second} \nfourth: ${fourth}`
};

const arr = [1, 2, 3, 4];

console.log(destructured(arr))
