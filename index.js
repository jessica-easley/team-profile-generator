const inquirer = require("inquirer");
const fs = require("fs");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const genPage = require("./src/template.js");
const myTeam = [];

function Manager() {
  inquirer
    .createPromptModule([
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
        message: "What is the Team Manaer's office number?",
      },
    ])
    .then((data) => {
      const manager = new Manager(data.name, data.id, data.email, data.office);
      myTeam.push(manager);
      secondInput();
    });
}

function secondInput() {
  inquirer
    .createPromptModule([
      {
        type: "list",
        name: "prompt",
        message: "What would you like to do next?",
        choices: ["Add Intern", "Add Engineer", "Write File"],
      },
    ])
    .then((answers) => {
      switch (answers.prompt) {
        case "Add Intern":
          addIntern();
          break;
        case "Add Engineer":
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
    myTeam.push(intern);
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
        myTeam.push(engineer);
        secondInput();
      });
}

function writeFile() {
  fs.writeFile("./dist/index.html", genPage(myTeam), (err) => {
    if (err) throw err;
    console.log("Success! Your HTML has been created.");
  });
}

Manager();
