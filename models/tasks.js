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

    createTask(desc = ''){
        const task = new Task(desc);
        this._list[task.id] = task; 
    }
}

module.exports = Tasks;