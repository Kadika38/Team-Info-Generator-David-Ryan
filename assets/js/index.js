const fs = require('fs');
const inquirer = require('inquirer');

const Manager = require('./manager');
const Engineer = require('./engineer');
const Intern = require('./intern');

var startQs = [
    {
        type: 'input',
        message: 'Please enter managers name',
        name: 'managerName',
    },
    {
        type: 'input',
        message: 'Please enter managers ID #',
        name: 'managerID',
    },
    {
        type: 'input',
        message: 'Please enter managers email',
        name: 'managerEmail',
    },
    {
        type: 'input',
        message: 'Please enter managers office #',
        name: 'managerOffice',
    },
];

var menuOps = [
    {
        type: 'list',
        message: 'Would you like to...',
        name: 'menuChoice',
        choices: ['Add new Engineer', 'Add new Intern', 'Finish setting up team'],
    },
];

var engQs = [
    {
        type: 'input',
        message: 'Please enter engineers name',
        name: 'engineerName',
    },
    {
        type: 'input',
        message: 'Please enter engineers ID #',
        name: 'engineerID',
    },
    {
        type: 'input',
        message: 'Please enter engineers email',
        name: 'engineerEmail',
    },
    {
        type: 'input',
        message: 'Please enter engineers github',
        name: 'engineerGithub',
    },
];

var intQs = [
    {
        type: 'input',
        message: 'Please enter interns name',
        name: 'internName',
    },
    {
        type: 'input',
        message: 'Please enter interns ID #',
        name: 'internID',
    },
    {
        type: 'input',
        message: 'Please enter interns email',
        name: 'internEmail',
    },
    {
        type: 'input',
        message: 'Please enter interns school',
        name: 'internSchool',
    },
];

function start() {
    var team = [];
    var begin = inquirer.prompt(startQs);
    begin.then((response) => {
        //create manager
        const manager = new Manager(response.managerName, response.managerID, response.managerEmail, response.managerOffice);
        //and add to team[]
        team.push(manager);
        var menu = inquirer.prompt(menuOps);
        menu.then((response) => {
            runUntilDone(response, team);
        });
    })
};

function runUntilDone(response, tm) {
    if (response.menuChoice == 'Add new Engineer') {
        addEng(tm);
    }
    if (response.menuChoice == 'Add new Intern') {
        addInt(tm);
    }
    if (response.menuChoice == 'Finish setting up team') {
        done(tm);
        return;
    }
    return;
}

function addEng(tm) {
    var createEng = inquirer.prompt(engQs);
    createEng.then((response) => {
        //create eng
        const engineer = new Engineer(response.engineerName, response.engineerID, response.engineerEmail, response.engineerGithub);
        //add eng to tm here
        tm.push(engineer);
        var menu = inquirer.prompt(menuOps);
        menu.then((response) => {
            runUntilDone(response, tm);
        });
    });
}

function addInt(tm) {
    var createInt = inquirer.prompt(intQs);
    createInt.then((response) => {
        //create int
        const intern = new Intern(response.internName, response.internID, response.internEmail, response.internSchool);
        //add int to tm here
        tm.push(intern);
        var menu = inquirer.prompt(menuOps);
        menu.then((response) => {
            runUntilDone(response, tm);
        });
    });
}

function done(tm) {
    fs.writeFile('index.html', 
    ``, 
    //if theres a error, console log the error, if not console log "Success!"
    (err) =>
        err ? console.error(err) : console.log("Success!")
    );
};

start();