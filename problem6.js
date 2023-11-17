/* Create a function that calculates the area of a circle. 
If the radius of the circle is not provided assume that the default radius is 5. 
Use the JavaScript default parameter feature to implement the function */

function calculateAreaOfCircle(r = 5) {
    return Math.PI * r * r
}

console.log(calculateAreaOfCircle())
