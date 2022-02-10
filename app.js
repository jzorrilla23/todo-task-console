require('colors');
const { inquirerMenu, pause } = require('./helpers/inquirer');
const { pausa } = require('./helpers/messages');
const Task = require('./models/task');
const Tasks = require('./models/tasks');

console.clear();

const main = async() => {
    let opt = '';
    do{
        opt = await inquirerMenu();
        console.log(opt)
        if(opt !== '0')
            await pause();
    } while(opt !== '0')
    
}

main();