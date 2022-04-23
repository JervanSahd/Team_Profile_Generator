
// connection to the parent class -Employee
const Employee = require("./Employee");


// intern class is a subclass of Employee extends to the Employees class
class Intern extends Employee {
  constructor(id, name, email, school){
    // grabs the properties for the parent class 
    super(id ,name, email);//to parent class or Employee
    this.school = school;
  }

    getSchool(){
    return this.school;
    }
    
    getRole(){
      return "Intern";
     

    }
  }
 

module.exports = Intern;
  
  
