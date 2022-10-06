const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./library/manager')
const Engineer = require('./library/engineer')
const Intern = require('./library/intern')

const employeeArray = [];

const finish = () => {

const generateHTML = (employeeArray) =>
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
  <title>My Team</title>
</head>
<body>
    <nav class="navbar navbar-dark bg-primary shadow m-5 rounded">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1 fs-1">My Team</span>
        </div>
    </nav>
    <main class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 justify-content-center">
    ${employeeArray.map(employee => {
        const role = employee.getRole()
        if (role === 'Manager') {
            const html =
            `<div class="col card shadow p-3 m-5 bg-body rounded" style="width: 18rem;">
                <div class="card-body text-center">
                    <h4>${employee.name}</h4>
                <h5 class="card-title">${role}</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${employee.id}</li>
                    <a href="mailto:${employee.email}" class="list-group-item">Email: ${employee.email}</a>
                    <li class="list-group-item">Office #${employee.office}</li>
                </ul>
                </div>
            </div>`
            return html;
        } else if (role === 'Engineer') {
            const html =
            `<div class="col card shadow p-3 m-5 bg-body rounded" style="width: 18rem;">
                <div class="card-body text-center">
                    <h4>${employee.name}</h4>
                <h5 class="card-title">${role}</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${employee.id}</li>
                    <a href="mailto:${employee.email}" class="list-group-item">Email: ${employee.email}</a>
                    <li href="https://github.com/${employee.github}" class= "list-group-item">Github: ${employee.github}</li>
                </ul>
                </div>
            </div>`
            return html;
        } else if (role === 'Intern') {
            const html =
            `<div class="col card shadow p-3 m-5 bg-body rounded" style="width: 18rem;">
                <div class="card-body text-center">
                    <h4>${employee.name}</h4>
                <h5 class="card-title">${role}</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${employee.id}</li>
                    <a href="mailto:${employee.email}" class="list-group-item">Email: ${employee.email}</a>
                    <li class="list-group-item">School: ${employee.school}</li>
                </ul>
                </div>
            </div>`
            return html;
        } else {
            const html =
            `No employees were returned`
            return html;
        }
    })}
    </main>
</body>
</html>`
    const htmlPageContent = generateHTML(employeeArray);

    fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
}
const promptEngineer = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is their name?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is their ID?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is their email?',
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is their Github username?',
            },

        ])
        .then(({ name, id, email, github }) => {
            
            const engineer = new Engineer(name, id, email, github)
            employeeArray.push(engineer)
            console.log(employeeArray)
            promptOther();
        });
}
const promptIntern = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is their name?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is their ID?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is their email?',
            },
            {
                type: 'input',
                name: 'school',
                message: 'What school are they attending?',
            },

        ])
        .then(({ name, id, email, school }) => {
            
            const intern = new Intern(name, id, email, school)
            employeeArray.push(intern)
            console.log(employeeArray)
            promptOther();
        });
}
const promptOther = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'name',
            message: 'Who do you want to add to your team?',
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
                message: 'What is your ID?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your email?',
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'What is your office number?',
            },

        ])
        .then(({ name, id, email, officeNumber }) => {
            
            const manager = new Manager(name, id, email, officeNumber)
            employeeArray.push(manager)
            console.log(employeeArray)
            promptOther();
        });
}

promptManager();
