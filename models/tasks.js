const Task = require('./task');

class Tasks{
    _list = {};

    get listArr() {
        return Object.entries(this._list).map((task)=>(
            task[1]
        ));
    }

    constructor(){
        this._list = {};
    }

    loadTasksFromArray( tasks = []){
        tasks.forEach( task => {
            this._list[task.id] = task;
        })
    }

    createTask(desc = ''){
        const task = new Task(desc);
        this._list[task.id] = task; 
    }

    listComplete(){
        Object.entries(this._list).forEach( (element,i) =>{
            let index = String(i +  1).green;
            const {desc, completeAt} = element[1]
            let complete = completeAt == null ? 'pendiente'.red : 'complete'.green;
            console.log(` ${index } ${desc} \t:: ${complete}`)
        })
    }
}

module.exports = Tasks;