const names = [];

function writeCards(names, event) {
    for (let i = 0; i < names.length; i++) {
        names.splice(i, 1, `Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return names;
}
writeCards(["Charlie", "Samip", "Ali"], "birthday");

function countDown() {
    let countDown = 10;
    while (countDown >= 0) {
        console.log(countDown--)
    }
};