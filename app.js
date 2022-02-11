require('colors');
const inquirer = require('inquirer');
const { inquirerMenu, pause, readInput } = require('./helpers/inquirer');
const { pausa } = require('./helpers/messages');
const Task = require('./models/task');
const Tasks = require('./models/tasks');

console.clear();

const main = async() => {
    let opt = '';
    const tasks = new Tasks();
    do{
        opt = await inquirerMenu();
        
        switch (opt) {
            case '1':
                const desc = await readInput('Add the description: ');
                tasks.createTask(desc);
                break;
            case '2':
                console.log(tasks._list);
                break;
            default:
                break;
        }
        if(opt !== '0')
            await pause();
    } while(opt !== '0')
    
}

main();