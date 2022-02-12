const Task = require('./task');

class Tasks {
    _list = {};

    get listArr() {
        return Object.entries(this._list).map((task) => (
            task[1]
        ));
    }

    constructor() {
        this._list = {};
    }

    loadTasksFromArray(tasks = []) {
        tasks.forEach(task => {
            this._list[task.id] = task;
        })
    }

    createTask(desc = '') {
        const task = new Task(desc);
        this._list[task.id] = task;
    }

    listComplete() {
        Object.entries(this._list).forEach((element, i) => {
            let index = String(i + 1).green;
            const { desc, completedAt } = element[1]
            let complete = completedAt == null ? 'pendiente'.red : 'complete'.green;
            console.log(` ${index} ${desc} \t:: ${complete}`)
        })
    }


    listCompletePending(complete = true) {
        let count = 0;
        Object.entries(this._list).forEach(task => {
           // console.log(task)
            let { desc, completedAt } = task[1]; 
            if (complete) {
                //console.log(task);
                if(completedAt != null){
                    count += 1;
                    console.log(` ${count} ${desc} \t:: ${'complete'.green}`)
                }
            }
            else {
                if(completedAt == null){
                    count += 1;
                    console.log(` ${count} ${desc} \t:: ${'pending'.red}`)
                }
            }
        })
    }
}

module.exports = Tasks;