//Javascript Object
let player = {
    name: "Gabriel",
    chips: 150
}

let cards = [] //Array -> list of itens
let sum = 0 //Number (Int) Type
let message = "" // String Type

//Boolean Types
let hasBlackjack = false
let isAlive = false

// DOM
let messageEl = document.getElementById("message-el") // HTML ID
let sumEl = document.querySelector("#sum-el") // CSS Selector
let cardsEl = document.querySelector("#cards-el")
let playerEl = document.getElementById("player-el")


//Inserting text into Element
playerEl.textContent = player.name + ": $" + player.chips


function getRandomCard() {
    //Math is a standard object of JS
    //Math.random() method generates a random number between 0 and 1 (not inclusive of 1)
    //Math.floor() method removes the decimals
    let randomNumber = Math.floor(Math.random() * 13) + 1

    //13 = 13 Cards (A to K)

    if (randomNumber === 1) {
        return 11 // A = 11
    } else if (randomNumber > 10) {
        return 10 // Q, J e K = 10
    } else {
        return randomNumber
    }
}


function startGame() {

    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard        

    isAlive = true
    hasBlackjack = false

    renderGame()
}


function renderGame() {

    sumEl.textContent = "Total: " + sum
    
    cardsEl.textContent = "Cartas:"

    for (let count = 0; count < cards.length; count += 1) {
        cardsEl.textContent += " " + cards[count]
    }

    if (sum <= 20) {
        message = "Deseja mais uma carta?"
    
    } else if (sum === 21) {
        message = "Wohoo! Você conseguiu um Blackjack!"
        hasBlackjack = true
    
    } else {
        message = "Você está fora do jogo!"
        isAlive = false
    }
    
    messageEl.textContent = message

}


function newCard() {

    if (isAlive && (! hasBlackjack)) {
        let newCard = getRandomCard()
        sum += newCard
        cards.push(newCard)
        renderGame()
    }
}
