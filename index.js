//-------------------------------------------------------------
// **OBJECT PRACTICE**
// let player = {
//     name: "Julia",
//     chips: 100
// }
//
// let playerEl = document.getElementById('player-el')
// playerEl.textContent = player.name + ": " + "$" + player.chips

//**code commented out so that anyone who plays the game, doesn't see the hardcoded values**
//-------------------------------------------------------------

let cards = []
let cardsEl = document.getElementById('cards-el')

let sum = 0
let sumEl = document.getElementById('sum-el')

let hasBlackJack = false
let isAlive = false

let message = "";
let messageEl = document.getElementById('message-el')

function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1
    if (randomCard > 10) {
        return 10
    } else if (randomCard === 1) {
        return 11
    } else {
        return randomCard
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}

function renderGame() {
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

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





