const inquirer = require("inquirer");

// TODO: Write code to define and export the Employee class
class Employee {
    constructor(id, email) {
      this.id = id;
      this.email = email;
    }

    getName() {
      inquirer
      .prompt([
        {
          type: "input",
          name: "getName",
          message: "Please input your first and last name."
        }
      ])
    }

    getId() {
      inquirer
      .prompt([
        {
          type: "input",
          name: "getId",
          message: "Please input your ID."
        }
      ])
    }
    getEmail() {
      inquirer
      .prompt([
        {
          type: "input",
          name: "getEmail",
          message: "Please input your email address."
        }
      ])
    }

    getRole() {
      this;
    }
}

  module.exports = Employee;
  