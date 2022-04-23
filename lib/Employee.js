
// all similar properties are stored in the class to be exported to engineer/intern/manager subclasses
// code to define and export the Employee class
class Employee{ //Parent Class
 constructor(name, id ,email){

  this.name = name;
  this.id = id;
  this.email = email;

 };
 
  getName(){
   return this.name
  };
  
  getId(){
    return this.id;
    };
    
  getEmail(){
     return this. email;
  };
  
  getRole(){
    return "Employee";
 };
  
}

module.exports = Employee;


