// Show an example where a function argument which is an object is destructured inside the parantheses of the function

const destructureObjectName = ({name}) => {
    console.log(`My name is ${name} `)
}


const destructureObjectNameLoc= ({name, location}) => {
    console.log(`My name is ${name} and I live in ${location}`)
}

let person = {
    name: 'Harry Potter',
    location: 'London'
}

destructureObjectName(person)
destructureObjectNameLoc(person)