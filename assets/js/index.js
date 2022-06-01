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
};

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
};

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
};

function done(tm) {
    const template = createTemplate(tm);
    fs.writeFile('index.html', 
    template, 
    //if theres an error, console log the error, if not console log "Success!"
    (err) =>
        err ? console.error(err) : console.log("Success!")
    );
};

const html1 = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!--Reset CSS-->
    <link rel="stylesheet" href="../css/reset.css">
    <!--Other stylesheets-->
    <link rel="stylesheet" href="../css/style.css" />
    <title>Team Info Dashboard</title>
  </head>

  <body>
    <div id="redSec">
        <h1>My Team</h1>
    </div>

    <div id="container">`;

const html2 = `</div>
    
</body>
</html>`;

function createTemplate(tm) {
    var myhtml = html1;
    for (t = 0; t < tm.length; t++) {
        if (tm[t] instanceof Manager) {
            myhtml = myhtml.concat(createMgrCard(tm[t]));
        };
        if (tm[t] instanceof Engineer) {
            myhtml = myhtml.concat(createEngCard(tm[t]));
        };
        if (tm[t] instanceof Intern) {
            myhtml = myhtml.concat(createIntCard(tm[t]));
        };
    };
    myhtml = myhtml.concat(html2);
    return myhtml;
};

function createMgrCard(mgr) {
    var mgrTemp = `
    <div class="card">
        <h2>${mgr.name}</h2>
        <h3>
            Manager
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cup iconCustomKadika" viewBox="0 0 16 16">
                <path d="M1 2a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v1h.5A1.5 1.5 0 0 1 16 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-.55a2.5 2.5 0 0 1-2.45 2h-8A2.5 2.5 0 0 1 1 12.5V2zm13 10h.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5H14v8zM13 2H2v10.5A1.5 1.5 0 0 0 3.5 14h8a1.5 1.5 0 0 0 1.5-1.5V2z"/>
            </svg>
        </h3>
        <div class="graySec">
            <div class="whiteSec">ID: ${mgr.id}</div>
            <div class="whiteSec">Email: <a href="mailto:${mgr.email}">${mgr.email}</a></div>
            <div class="whiteSec">Office Number: ${mgr.office}</div>
        </div>
    </div>`
    return mgrTemp;
}

function createEngCard(eng) {
    var engTemp = `
    <div class="card">
        <h2>${eng.name}</h2>
        <h3>
            Engineer
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wrench iconCustomKadika" viewBox="0 0 16 16">
                <path d="M.102 2.223A3.004 3.004 0 0 0 3.78 5.897l6.341 6.252A3.003 3.003 0 0 0 13 16a3 3 0 1 0-.851-5.878L5.897 3.781A3.004 3.004 0 0 0 2.223.1l2.141 2.142L4 4l-1.757.364L.102 2.223zm13.37 9.019.528.026.287.445.445.287.026.529L15 13l-.242.471-.026.529-.445.287-.287.445-.529.026L13 15l-.471-.242-.529-.026-.287-.445-.445-.287-.026-.529L11 13l.242-.471.026-.529.445-.287.287-.445.529-.026L13 11l.471.242z"/>
            </svg>
        </h3>
        <div class="graySec">
            <div class="whiteSec">ID: ${eng.id}</div>
            <div class="whiteSec">Email: <a href="mailto:${eng.email}">${eng.email}</a></div>
            <div class="whiteSec">Github: <a href="https://github.com/${eng.github}" target="_blank">${eng.github}</a></div>
        </div>
    </div>`
    return engTemp;
}

function createIntCard(int) {
    var intTemp = `
    <div class="card">
        <h2>${int.name}</h2>
        <h3>
            Intern
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil iconCustomKadika" viewBox="0 0 16 16">
                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
            </svg>
        </h3>
        <div class="graySec">
            <div class="whiteSec">ID: ${int.id}</div>
            <div class="whiteSec">Email: <a href="mailto:${int.email}">${int.email}</a></div>
            <div class="whiteSec">School: ${int.school}</div>
        </div>
    </div>`
    return intTemp;
}

start();