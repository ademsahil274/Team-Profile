const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inqirer');
const path = require('path');
const fs = require('fs');

const DIST_DIR = path.resolve(__dirnam, 'dist');
const distPath = path.join(DIST_DIT, 'team.html');

const render = require('./src/page-template');

const teamMembers = [];
const idArray = [];

// Inform user of usage
console.log('\nWelcome to the team generator!\nUse `npm run reset` to reset the dist/ folder\n');

function appMenu() {
    function createManager() {
        console.log('Please build your team!');
        inquirer
        .prompt([
            {
                type: 'input',
                name: 'managerName',
                message: "What is the team Manager's name?",
                validate: (answer) => {
                    if (answer !== '') {
                        return true;
                    }
                    return 'Please enter at least one character.';
                },
            },
            {
                type: 'input',
                name: 'managerId',
                message: "What is the team manager's id?",
                validate: (answer) => {
                  const pass = answer.match(/^[1-9]\d*$/);
                  if (pass) {
                    return true;
                  }
                  return 'Please enter a positive number greater than zero.';
                },
              },
            {
                type: 'input',
                name: 'managerEmail',
                message: "What is the team Manager's email?",
                validate: (answer) => {
                    const pass = answer.match(/\S+@\S+\.\S+/);
                    if (pass) {
                        return true;
                    }
                    return 'Please enter a valid email address.';
                },
            },
            {
                type: 'input',
                name: 'managerOfficeNumber',
                message: "What is the team Manager's office number?",
                validate: (answer) => {
                    const pass = answer,match(/^[1-9]\d*$/);
                    if (pass) {
                        return true;
                    }
                    return 'Please enter a posotive number greater than zero.';
                },
            },

        ])
        .then((answers) => {
            const manager = new Manager(
                answers.managerName,
                answers.mangerId,
                answers.managerEmail,
                answers.managerOfficeNumber,
            );
            teamMembers.push(manager);
            idArray.push(answers.managerId);
            createTeam();
        });
    }

    function createTeam() {
        //code goes here

    }

    function addEngineer() {
        //code goes here

    }

    function addIntern() {
        //code goes here

    }

    function buildTeam() {
        // create the output directory if the dist doesn't exist
        
        if (!fs.existsSync(DIST_DIR)) {
            fs.mkdirSync(DIST_DIR);
        }
        fs.writeFileSync(distPath, render(teamMembers), 'utf-8');
    }

    createManager();
}

appMenu();