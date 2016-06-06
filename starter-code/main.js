console.log("JS file is connected to HTML! Woo!")

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

if (cardOne === cardThree && cardOne === cardFour) {
  window.alert("Sorry try again.");
}
else if (cardTwo === cardThree && cardTwo === cardFour) {
  window.alert("Sorry try again.");
} else {
  window.alert("You found a match.");
}