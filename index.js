function writeCards(names) {
    let cardsArray = [];
    for (let i = 0; i < names.length; i++) {
        cardsArray.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
    return cardsArray
}


function countDown(num) {
    while (num >= 0) {
        console.log(num--);
    }

}
