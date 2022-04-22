const inquirer = require("inquirer");
const fs = require("fs");

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const teamArr = [];

const generateHTML = (answers) => {
  `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <title>Document</title>
  </head>
  <body>
    <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-4"></h1>
      <p class="lead">I am from</p>
      <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
      <ul class="list-group">
        <li class="list-group-item">My GitHub username is </li>
        <li class="list-group-item">My Food username is </li>
        <li class="list-group-item">LinkedIn:</li>
      </ul>
    </div>
  </div>
  </body>
  </html>`;
  
  inquirer
    .prompt([
      {
        type: "input",
        name: "mName",
        message: "What is your team manager's name?",
      },
      {
        type: "input",
        name: "mId",
        message: "What is your team manager's ID?",
      },
      {
        type: "input",
        name: "mEmail",
        message: "What is your team manager's email address?",
      },
      {
        type: "input",
        name: "officeNum",
        message: "What is your team manager's office number?",
      },
      {
        type: "list",
        name: "eType",
        message: "Which type of team member would you like to add?",
        choices: ["Engineer", "Intern", "Done"],
      },
    ])
    .then((mAnswers) => {
      const newManager = new Manager(
        mAnswers.mName,
        mAnswers.mId,
        mAnswers.mEmail,
        mAnswers.officeNum
      );
      teamArr.push(newManager);
      if (mAnswers.eType === "Engineer") {
        eQuestion();
      } else if (mAnswers.eType === "Intern") {
        iQuestion();
      } else if (mAnswers.eType === "Done") {
        addTeam();
       
      }
    });

  const eQuestion = (eAnswers) => {
    inquirer
      .prompt([
        {
          type: "input",
          name: "eName",
          message: "What is your engineer's name?",
        },
        {
          type: "input",
          name: "eid",
          message: "What is your engineer's ID?",
        },
        {
          type: "input",
          name: "eEmail",
          message: "What is your engineer's email?",
        },
        {
          type: "input",
          name: "gitHub",
          message: "What is your engineer's Github Username?",
        },
        {
          type: "list",
          name: "addType",
          message: "Which type of team member would you like to add?",
          choices: ["Engineer", "Intern", "Done"],
        },
      ])
      .then((eAnswers) => {
        const newEngineer = new Engineer(
          eAnswers.eName,
          eAnswers.eid,
          eAnswers.eEmail,
          eAnswers.gitHub
        );
        teamArr.push(newEngineer);
        if (eAnswers.addType === "Engineer") {
          eQuestion();
        } else if (eAnswers.addType === "Intern") {
          iQuestion();
        } else if (eAnswers.addType === "Done") {
          addTeam();
        }
      });
  };

  function iQuestion(iAnswers) {
    inquirer
      .prompt([
        {
          type: "input",
          name: "iName",
          message: "What is your intern's name?",
        },
        {
          type: "input",
          name: "iId",
          message: "What is your intern's ID?",
        },
        {
          type: "input",
          name: "iEmail",
          message: "What is your intern's email address?",
        },
        {
          type: "input",
          name: "school",
          message: "What is your intern's school?",
        },
        {
          type: "list",
          name: "addType",
          message: "Which type of team member would you like to add?",
          choices: ["Engineer", "Intern", "Done"],
        },
      ])
      .then((iAnswers) => {
        const newIntern = new Intern();
        teamArr.push(newIntern);
        if (iAnswers.addType === "Engineer") {
          iQuestion(iAnswers);
          iQuestion();
        } else if (iAnswers.addType === "Intern") {
          iQuestion(iAnswers);
        } else if (iAnswers.addType === "Done") {
          addTeam();
        }
      });
  }
};
const addTeam = () => {
  // const htmlPageContent = generateHTML(answers);
  fs.writeFile("./dist/index.html", (teamArr), "utf-8", (err) =>
    err ? console.log(err) : console.log("Successfully created index.html!")
  );
};

generateHTML();
