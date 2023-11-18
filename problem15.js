// Iterate through all keys of an object using Object.keys

let person = {
    name: 'Harry Potter',
    location: 'London', 
    school: 'Hogwarts'
}

for(let key of Object.keys(person)){
    console.log(key)
}