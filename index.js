const inquirer = require("inquirer");
const fs = require("fs");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const genPage = require("./src/template.js");

const team = [];

console.log(
  '\nHello! Welcome to the team generator!\nUse `npm run reset` to reset the dist/ folder\n'
);

function appMenu() {
function managerCreate() {
  console.log('Please build your team 👥');
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the Team Manager's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the Team Manager's ID?",
      },
      {
        type: "input",
        name: "email address",
        message: "What is the Team Manager's email address?",
      },
      {
        type: "input",
        name: "office",
        message: "What is the Team Manager's office number?",
      },
  ])
    .then((data) => {
      const manager = new Manager(data.name, data.id, data.email, data.office);
      team.push(manager);
      secondInput();
    });
}

function secondInput() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "prompt",
        message: "What would you like to do next?",
        choices: ["Add an Intern", "Add an Engineer", "Write File"],
      },
    ])
    .then((answers) => {
      switch (answers.prompt) {
        case "Add an Intern":
          addIntern();
          break;
        case "Add an Engineer":
          addEngineer();
          break;
        case "Write File":
          writeFile();
          break;
      }
    });
}


function addIntern() {
inquirer
.prompt([
    {
        type: "input",
        name: "name",
        message: "What is the Intern's name?",
      },
      {
        type: "input",
        name: "id",
        mmessage: "What is the Intern's ID?",
      },
      {
        type: "input",
        name: "email address",
        message: "What is the Intern's email address?",
      },
      {
        type: "input",
        name: "school",
        message: "What is the Intern's school name?",
      },
])
.then((data) => {
    const intern = new Intern(data.name, data.id, data.email, data.school);
    team.push(intern);
    secondInput();
  });
}

function addEngineer() {
    inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "What is the Engineer's name?",
          },
          {
            type: "input",
            name: "id",
            mmessage: "What is the Engineer's ID?",
          },
          {
            type: "input",
            name: "email address",
            message: "What is the Engineer's email address?",
          },
          {
            type: "input",
            name: "github",
            message: "What is the Engineer's GitHub username?",
          },
    ])
    .then((data) => {
        const engineer = new Engineer(data.name, data.id, data.email, data.school);
        team.push(engineer);
        secondInput();
      });
}

function writeFile() {
  fs.writeFile("./dist/index.html", genPage(team), (err) => {
    if (err) throw err;
    console.log("Success! Your HTML has been created.");
  });
}

managerCreate();
}

appMenu();