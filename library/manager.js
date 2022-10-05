const Employee = require('../library/employee');

class Manager extends Employee {
  constructor(name, id, email, office) {
    super(name, id, email);
    this.office = office;
  }
  //not mentioned in readme
  getOffice(){
    return this.office
  }
  getRole(){
    return 'Manager'
  }
}

module.exports = Manager;