// Create a multi-line string and then split the string into the corresponding lines and print the lines

const multiLine = `hello this is 
another world 
of coding`;

const arr = multiLine.split("\n")
arr.forEach((line) => console.log(line))