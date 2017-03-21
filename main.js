var cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "dimonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "dimonds",
    cardImage: "images/king-of-diamonds.png"
  }
];
var cardsInPlay = [];

function checkForMatch() {
  console.log(cardsInPlay);
  if (cardsInPlay.length === 1) {
    return;
  }else if (cardsInPlay[0] === cardsInPlay[1]){
    console.log("You found a match!");
  } else {
    console.log("Sorry, try again.");
  }
}

function flipCard() {
  var cardId = this.getAttribute('data-id');
  this.setAttribute('src', cards[cardId].cardImage);

  cardsInPlay.push(cards[cardId].rank);
  checkForMatch();
  console.log("User flipped " + cards[cardId].rank);
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);
}

function createBoard() {
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', "images/back.png");
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById("game-board").appendChild(cardElement);
  }
}

createBoard();
