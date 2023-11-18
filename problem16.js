// Iterate through all values of an object using Object.values

let person = {
    name: 'Harry Potter',
    location: 'London', 
    school: 'Hogwarts'
}

for(let key of Object.values(person)){
    console.log(key)
}