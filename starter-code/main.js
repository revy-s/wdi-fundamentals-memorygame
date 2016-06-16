console.log("JS file is connected to HTML! Woo!")

/*DO NOT DELETE
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
*/


/*FOLLOWING IS LONG VERSION TO CREATE FOUR <div class="card"></div>
CREATE four tag element '<div></div>'
var cCards = document.createElement('div');
	var cCard1 = document.createElement('div');
	var cCard2 = document.createElement('div');
	var cCard3 = document.createElement('div');
	var cCard4 = document.createElement('div');

CREATE four HTML element 'class="card"'
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
var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

var gameBoard = document.getElementById('game-board');
//gameBoard = board in assignment 11
document.getElementById('game-board');
//<div id="game-board" class="board"></div>

/*Following 'FOR LOOP' below was from http://stackoverflow.com/questions/11398522/create-a-div-using-loop
*/
//function to create board
var createBoard = document.createDocumentFragment();
	for (var i = 0; i < cards.length; i++) {
		var cCards = document.createElement('div');
		cCards.className = 'card';
		//cCards = cardElement in the assignment.
		cCards.setAttribute('data-card', cards[i]);
		cCards.addEventListener('click', isTwoCards);
		createBoard.appendChild(cCards);
		createBoard.appendChild(cCards);
	}
document.getElementById('game-board').appendChild(createBoard);


function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='/Users/RDSamia/fundamentals/wdi-fundamentals-memorygame/starter-code/images/Hearts-13.png'>";
	} else {
		this.innerHTML = "<img src='/Users/RDSamia/fundamentals/wdi-fundamentals-memorygame/starter-code/images/Clubs-12.png'>";	
	}
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}

function isMatch(cards) {
	if (cards[0] === cards[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
}

createBoard();