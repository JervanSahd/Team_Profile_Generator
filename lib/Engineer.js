// imports employee properties to be added to github properties   
const Employee = require("./Employee");

//the engineer class is created to hold the github username and  inherited property from the parent Employee class
class Engineer extends Employee {
  constructor(name, id, email, github) {
    
    super(name, id ,email);
    this.github = github;
}


getGithub(){
return this.github;
}

getRole(){
  return "Engineer";
}
}
// this is used to export to index.js to be used to create html cards.
  module.exports = Engineer;


