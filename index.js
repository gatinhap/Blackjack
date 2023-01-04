let firstCard = 5
let secondCard = 2
let cards = [firstCard, secondCard]
let cardsEl = document.getElementById('cards-el')

let sum = firstCard + secondCard
let sumEl = document.getElementById('sum-el')

let hasBlackJack = false
let isAlive = true

let message = "";
let messageEl = document.getElementById('message-el')

function renderGame() {
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true
    } else {
        message = "You're out of the game!";
        isAlive = false
    }
    messageEl.textContent = message
}

function startGame() {
    renderGame()
}

function newCard() {
    let card = 3
    sum += card
    cards.push(card)
    renderGame()
}





