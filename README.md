# Team-Info-Generator-David-Ryan 
A Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person.  Also exemplifies testing.  Bootcamp homework 10.

## Table of Contents
* [Description](#general-description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
    
    
## Description
Run this app on the terminal using 'node index.js' with the folder open.  This will run an Inquirer set up command line set of prompts.  These will take in information about a software engineering team.  The team can be as large as you want, but there is only one manager.  When you are finished, select 'Finish setting up team'.  This will send that data to a series of functions that build an html file using templates.  When the file is built it will be written to the current folder.  The file assumes that it is placed with the 'index.js' file that created it.  It only reads the css files correctly (due to file pathing) if you leave it there.  If you move it you have to adjust the file paths in the html.  When opened in the browser, the html will be a website that says 'My Team' at the top and underneath has all of the members of the team you set up.  Their names, titles, IDs, emails, and office numbers/Githubs/schools will be shown on their cards.  Clickig on the email links opens your devices email app and starts an email written to the employee's email that was clicked.  Github links will open the employee's Github.

A walkthrough video can be viewed at https://drive.google.com/file/d/1vzp3IQ8ALDyumnnsHm7XgABftG-T3IfD/view.


## Installation
Run 'npm i' in the console to load all necessary node modules.


## Usage
Run 'node index.js' in the terminal to start.  Runs in the terminal and completes by creating a new 'index.html' file.


## License
This repository is licensed using a None license.


## Contributing
This is just a bootcamp assignment.  No contributions.


## Tests
Tests have been set up using Jest.  Tests for the Employee class and its children (Manager, Engineer, and Intern) can be seen in the tests folder.  To run them, run 'npm test' in the terminal.


## Questions
Any questions?  Contact me on GitHub @ https://github.com/Kadika38 or email dryan10101@gmail.com.

## P.S.
Most of this README was created using our previous assignment's README generator.  Very useful.  I know some of the sections don't apply, but it looks better to just leave them I think.
Also the index.html file is set to use the css files as i have them placed in my file structure.  If you move either the html or the css, they won't have each other's correct paths anymore and thus won't work.  Please take note.