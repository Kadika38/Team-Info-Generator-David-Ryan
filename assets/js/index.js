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
];

var menuOps = [
    {
        type: 'list',
        message: 'Would you like to...',
        name: 'menuChoice',
        choices: ['Add new Engineer', 'Add new Intern', 'Finish setting up team'],
    },
]

function start() {
    var team = [];
    var begin = inquirer.prompt(startQs);
    begin.then((response) => {
        //create manager here
        
        var menu = inquirer.prompt(menuOps);
        menu.then((response) => {
            runUntilDone(response);
        });
    })
};

function runUntilDone(response) {
    if (response.menuChoice == 'Add new Engineer') {
        addEng();
    }
    if (response.menuChoice == 'Add new Intern') {
        addInt();
    }
    if (response.menuChoice == 'Finish setting up team') {

        return;
    }
    return;
}

function addEng() {

}

function addInt() {
    
}

start();