 // Remove the main element with id 'main'
document.getElementById("main").remove();

// Define the 'newHeader' variable and create a new <h1> node
const newHeader = document.createElement('h1');

// Set the id of the 'newHeader' variable to 'victory'
newHeader.id = 'victory';

// Set the text content of the 'newHeader' variable
newHeader.textContent = "YOUR-NAME is the champion"; // Replace YOUR-NAME with your actual name

// Append the 'newHeader' to the body of the document
document.body.appendChild(newHeader);
