# Team Profile Generator

## Description

A Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person. Unit test for every part of your code and ensure that it passes each test.

```md
A manager generates a webpage that displays my team's basic info to have quick access to their emails and GitHub profiles,
```

## Acceptance Criteria

```md
This is a command-line application that accepts user input.
* 	Prompted for  team members and their information an HTML file is generated that displays a nicely formatted team roster based on user input
*	Click on an email address in the HTML and a default email program opens and populates the TO field of the email with the address
*	Click on the GitHub username that GitHub profile opens in a new tab
*	Once Started the application a prompt to enter the team manager’s name, employee ID, email address, and office number
*	Enter the team manager’s name, employee ID, email address, and office number presented with a menu with the option to add an engineer or an intern or to finish building my team
*	Select the engineer option and prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
*	Select the intern option and prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
*	When deciding to finish building a team exit the application, and the HTML is generated
```

## Includes

Use [Jest](https://www.npmjs.com/package/jest) for running the unit tests and [Inquirer](https://www.npmjs.com/package/inquirer) for collecting input from the user. The application will be invoked by using the following command:

## Directory Structure

It is recommended that you start with a directory structure that looks like the following example:

```md
.
├── __tests__/             //jest tests
│   ├── Employee.test.js
│   ├── Engineer.test.js
│   ├── Intern.test.js
│   └── Manager.test.js
├── dist/                  // rendered output (HTML) and CSS style sheet      
├── lib/                   // classes
├── src/                   // template helper code 
├── .gitignore             // indicates which folders and files Git should ignore
├── index.js               // runs the application
└── package.json           
```


## Project Walkthrough

You are required to submit the following for review:

* A walkthrough video that demonstrates the functionality of the application and passing tests.

https://drive.google.com/file/d/1V8UsSTvrJNZn8hNJKOuRh0m1VCKBcpWB/view
---
* The URL of the GitHub repository, with a unique name and a readme describing the project.

https://github.com/JervanSahd/Team_Profile_Generator
---