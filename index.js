const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./library/manager')
const Engineer = require('./library/engineer')
const Intern = require('./library/intern')

const employeeArray = [];
const generateHTML = ({ name, location, github, linkedin }) =>
    ``;

const finish = () => {
//loop through array
return `

${employeeArray.map(employee => {
    //use employee.getRole() to identify role
    //if Manager - return Manager html block
    //else if Engineer - return Engineer html block
    //else if Intern - return Intern html block
})}
`
}
const promptEngineer = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is your name?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'Where are you from?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your favorite hobby?',
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is your favorite food?',
            },

        ])
        .then(({ name, id, email, github }) => {
            //const htmlPageContent = generateHTML(answers);

            // fs.writeFile('index.html', htmlPageContent, (err) =>
            //   err ? console.log(err) : console.log('Successfully created index.html!')
            // );
            const engineer = new Engineer(name, id, email, github)
            employeeArray.push(engineer)
            console.log(employeeArray)
            promptOther();
        });
}
const promptOther = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'name',
            message: 'Who do you want to add?',
            choices: ['Engineer', 'Intern', 'Finish']
        },
    ])
        .then((choice) => {
            switch (choice.name) {
                case 'Engineer':
                    promptEngineer();
                    break;
                case 'Intern':
                    promptIntern();
                    break;
                case 'Finish':
                    finish();
                    break;
                default:
                    console.log('Did not match any cases')
            }
        })
}
const promptManager = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is your name?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'Where are you from?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your favorite hobby?',
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'What is your favorite food?',
            },

        ])
        .then(({ name, id, email, officeNumber }) => {
            //const htmlPageContent = generateHTML(answers);

            // fs.writeFile('index.html', htmlPageContent, (err) =>
            //   err ? console.log(err) : console.log('Successfully created index.html!')
            // );
            const manager = new Manager(name, id, email, officeNumber)
            employeeArray.push(manager)
            console.log(employeeArray)
            promptOther();
        });
}

promptManager();
