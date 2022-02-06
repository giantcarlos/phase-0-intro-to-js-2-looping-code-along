function writeCards(names, event) {
    let thankYouCards = []
    for (let i = 0; i < names.length; i++) {
        thankYouCards[i] = (`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return thankYouCards;
}

function countDown() {
    let countDown = 10;
    while (countDown >= 0) {
        console.log(countDown--)
    }
}