require('colors');

const showMenu = () =>{
    console.clear();
    console.log('===================='.green);
    console.log('  Choose an option');
    console.log('====================\n'.green);

    console.log(`${ '1.'.green }Create task`);
    console.log(`${ '2.'.green }List task`);
    console.log(`${ '3.'.green }List completed tasks`);
    console.log(`${ '4.'.green }List pending tasks`);
    console.log(`${ '5.'.green }Complete task(s)`);
    console.log(`${ '6.'.green }Delete task`);
    console.log(`${ '0.'.green }Quit\n`);

    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question('Select an option: ', (option)=>{
        // console.log(option);
        readline.close();
    })
}

const pausa = () =>{
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question('\n Press ENTER key to continue: \n', (option)=>{
        console.log(option);
    })
}

module.exports = {
    pausa,
    showMenu
}