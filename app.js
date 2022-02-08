require('colors');
const { showMenu, pausa } = require('./helpers/messages');

console.clear();

const main = async() => {
    showMenu();
    pausa();
}

main();