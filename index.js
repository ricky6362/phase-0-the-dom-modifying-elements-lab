// Write your code here!
// Accessing the main through its id
const main = document.getElementById('main')

// removing the element
main.remove()

// Creating h1 element
let newHeader = document.createElement("h1")

// Appending the element
document.body.appendChild(newHeader)

// adding an id to the newHeader variable
newHeader.setAttribute("id", "victory");

// Adding text to the h1 element
let userName = "Richard Kimani"
newHeader.textContent = `${userName} is the champion`