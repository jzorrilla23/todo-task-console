require('colors');

const showMenu = () => {

    return new Promise(resolve => {
        console.clear();
        console.log('===================='.green);
        console.log('  Choose an option');
        console.log('====================\n'.green);

        console.log(`${'1.'.green}Create task`);
        console.log(`${'2.'.green}List task`);
        console.log(`${'3.'.green}List completed tasks`);
        console.log(`${'4.'.green}List pending tasks`);
        console.log(`${'5.'.green}Complete task(s)`);
        console.log(`${'6.'.green}Delete task`);
        console.log(`${'0.'.green}Quit\n`);

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        let opt = '';
        readline.question('Select an option: ', (option) => {
            readline.close();
            resolve(option)
        })

    })

}

const pausa = () => {
    return new Promise(resolve =>{
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readline.question('\n Press ENTER key to continue: \n', (option) => {
            readline.close()
            resolve()
        })
    })
    
}

module.exports = {
    pausa,
    showMenu
}