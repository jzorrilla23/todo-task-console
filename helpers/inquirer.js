const inquirer = require('inquirer')
require('colors');

const questions = [
    {
        type: 'list',
        name: 'option',
        message: 'What you want to do?',
        choices: [
            {
                value:'1',
                name:'1. Create a task.'
            },
            {
                value:'2',
                name:'2. List tasks'
            },
            {
                value:'3',
                name:'3. List completed tasks'
            }, 
            {
                value:'4',
                name:'4. List pending tasks'
            },
            {
                value:'5',
                name:'5. List all tasks'
            },
            {
                value:'6',
                name:'6. Delte task'
            },
            {
                value:'0',
                name: '0. Quit'
            }

        ]
    }
]

const inquirerMenu = async() =>{
    console.log('===================='.green);
    console.log('  Choose an option');
    console.log('====================\n'.green);

    const {option} = await inquirer.prompt(questions)
    return option;
}

const pause = async() => {
    return await inquirer.prompt({type:'input',name:'pause', message:`Press ${'enter'.green} to continue`});
}

const readInput = async(message)=>{
    const question = [
        {
            type:'input',
            name:'desc',
            message,
            validate(value){
                if(value.length === 0){
                    return 'Please input a value.';
                }
                return true;
            }
        }
    ];

    const { desc } = await inquirer.prompt(question);
    return desc;
}
module.exports = {
    inquirerMenu,
    pause,
    readInput
}