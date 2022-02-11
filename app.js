require('colors');
const inquirer = require('inquirer');
const { inquirerMenu, pause, readInput } = require('./helpers/inquirer');
const { pausa } = require('./helpers/messages');
const { saveDB } = require('./helpers/saveFile');
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
                console.log(tasks.listArr);
                break;
            default:
                break;
        }

        // saveDB(JSON.stringify(tasks.listArr));
        if(opt !== '0')
            await pause();
    } while(opt !== '0')
    
}

main();