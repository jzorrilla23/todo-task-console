require('colors');
const inquirer = require('inquirer');
const { inquirerMenu, pause, readInput, deleteMenu, confirm, checkTaskComplete } = require('./helpers/inquirer');
const { pausa } = require('./helpers/messages');
const { saveDB, readDB } = require('./helpers/saveFile');
const Task = require('./models/task');
const Tasks = require('./models/tasks');

console.clear();

const main = async() => {
    let opt = '';
    const tasks = new Tasks();

    const tasksDB = readDB()
    
    if(tasksDB){
        tasks.loadTasksFromArray(tasksDB);
    }
    do{
        opt = await inquirerMenu();
        
        switch (opt) {
            case '1':
                const desc = await readInput('Add the description: ');
                tasks.createTask(desc);
                break;
            case '2':
                tasks.listComplete();
                break;
            case '3':
                tasks.listCompletePending();
                break;
            case '4':
                tasks.listCompletePending(false);
                break;
            case '5':
                const ids = await checkTaskComplete(tasks.listArr);
                tasks.toggleComplete(ids);
                break;
            case '6':
                if(Object.keys(tasks._list).length == 0){
                    console.log('There is no task')
                }else{
                    let tasksArr = Object.entries(tasks._list).map( (element, index) =>{
                        return { id:element[1]['id'],value:index+1, name:`${String(index+1).green} ${element[1]['desc']}` }
                    });
                    let index = await deleteMenu(tasksArr)
                    let task = tasksArr[index-1];
                    let ok = await confirm('Are you sure to delete?');
                    if(ok){
                        tasks.deleteTask(task.id);
                    }
                }
            default:
                break;
        }

        saveDB(JSON.stringify(tasks.listArr));
        if(opt !== '0')
            await pause();
    } while(opt !== '0')
    
}

main();