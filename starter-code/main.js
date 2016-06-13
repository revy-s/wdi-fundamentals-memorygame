console.log("JS file is connected to HTML! Woo!")

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

/*DO NOT DELETE
if (cardOne === cardThree && cardOne === cardFour) {
  window.alert("Sorry try again.");
}
else if (cardTwo === cardThree && cardTwo === cardFour) {
  window.alert("Sorry try again.");
} else {
  window.alert("You found a match.");
}
*/

var gameBoard = document.getElementById('game-board');

document.getElementById('game-board');
//<div id="game-board" class="board"></div>

/*FOLLOWING IS LONG VERSION TO CREATE FOUR <div class="card"></div>
CREATE four '<div></div>' element
var cCards = document.createElement('div');
	var cCard1 = document.createElement('div');
	var cCard2 = document.createElement('div');
	var cCard3 = document.createElement('div');
	var cCard4 = document.createElement('div');

CREATE four 'class="card"' element
cCards.className = 'card';
	cCard1.className = 'card';
	cCard2.className = 'card';
	cCard3.className = 'card';
	cCard4.className = 'card';

ADD four <div class="card"></div> after 'div id=game-board...'
document.getElementById('game-board').appendChild(cCards);
	document.getElementById('game-board').appendChild(cCard1);
	document.getElementById('game-board').appendChild(cCard2);
	document.getElementById('game-board').appendChild(cCard3);
	document.getElementById('game-board').appendChild(cCard4);
*/

/*Following 'FOR LOOP' below was from http://stackoverflow.com/questions/11398522/create-a-div-using-loop
*/
var toAddCards = document.createDocumentFragment();
for (var i = 0; i < 4; i++) {
	var cCards = document.createElement('div');
	cCards.className = 'card';
	toAddCards.appendChild(cCards);
}
document.getElementById('game-board').appendChild(toAddCards);
