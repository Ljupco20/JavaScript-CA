let userInput = prompt("Ask a question");

let message;

switch (userInput) {
  case "what are u doing":
    message = "I am eating";
    break;
  case "where are u going":
    message = "I am eating";
    break;
  case "Are we there yet":
    message = "No!";
    break;
  case "Do you know coding":
    message = "No!";
    break;

  default:
    message = "I dont understand the question";
    break;
}
console.log(userInput);
console.log(message);
