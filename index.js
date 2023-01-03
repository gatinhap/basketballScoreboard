//create variable for score field
//create a function that adds points to the score
//add onclick event listener to each button

let homeInitialScore = 0
let guestInitialScore = 0
let homeScore = document.getElementById('home-score');
let guestScore = document.getElementById('guest-score');

function homeAdd1() {
    homeInitialScore += 1
    homeScore.innerText = homeInitialScore
}

function homeAdd2() {
    homeInitialScore += 2
    homeScore.innerText = homeInitialScore
}

function homeAdd3() {
    homeInitialScore += 3
    homeScore.innerText = homeInitialScore
}

function guestAdd1() {
    guestInitialScore += 1
    guestScore.innerText = guestInitialScore
}

function guestAdd2() {
    guestInitialScore += 2
    guestScore.innerText = guestInitialScore
}

function guestAdd3() {
    guestInitialScore += 3
    guestScore.innerText = guestInitialScore
}
