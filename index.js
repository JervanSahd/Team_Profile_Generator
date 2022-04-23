const inquirer = require("inquirer");
const fs = require("fs");

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const teamArr = [];//array to hold newly created employees

const generateHTML = (answers) => {//function to create html to populate on dist/index.html file.

  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="./dist/style.css">
    <title>My Team</title>
  </head>
  <body>
  <header>  
   
  <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-4">My Team</h1>
    </div>
  </div>
  </header> 
<main class="container ">
<div> Employee Cards go here
</div>
</main>

  </body>
  </html>`;
};

  inquirer // creates object for Manager
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
        type: "list",// list to choose which type of employee to create
        name: "eType",
        message: "Which type of team member would you like to add?",
        choices: ["Engineer", "Intern", "Done"],
      },
    ])
    .then((mAnswers) => {
      const newManager = new Manager(//creates the manager object 
        mAnswers.mName,
        mAnswers.mId,
        mAnswers.mEmail,
        mAnswers.officeNum
      );
      teamArr.push(newManager);//pushes the user input into the array
      if (mAnswers.eType === "Engineer") { // if the engineer from the list is choosen then it is sent create an engineer 
        eQuestion();
      } else if (mAnswers.eType === "Intern") {// if the intern from the list is choosen then it is sent to the Intern 
        iQuestion();
      } else if (mAnswers.eType === "Done") { //user is finished creating a team and the html is created by calling the function addTeam
        addTeam();
       
      }
    });
  
  const eQuestion = (eAnswers) => {// this the creation of the engineer object/ repeats the manager  
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

  function iQuestion(iAnswers) {// this the creation of the intern object/ repeats the manager 
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
        const newIntern = new Intern( 
          iAnswers.iName,
          iAnswers.iId,
          iAnswers.iEmail,
          iAnswers.school
          );
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
const addTeam = () => {//the addTeam functions generates the html to the index.html file.
  fs.writeFile("./dist/index.html", generateHTML (teamArr), "utf-8", (err) =>
    err ? console.log(err) : console.log("Successfully created index.html!")
  );
};

