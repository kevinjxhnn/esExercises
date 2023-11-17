// Show an example where enhanced object literals is used.

let firstName = "Kevin"
let lastName = "John"


let person = {
    firstName,
    lastName,
    greet: () => {
        console.log(`Welcome ${firstName} ${lastName}`)
    }
}

person.greet()