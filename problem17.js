// Iterate through all the key / value pairs of an object using Object.entries

let person = {
    name: 'Harry Potter',
    location: 'London', 
    school: 'Hogwarts'
}



for(let pair of Object.entries(person)){
    console.log(pair)
}