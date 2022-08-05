const inquirer = require('inquirer')
const fs = require('fs');

class Employee {
    constructor() {
    }

    async getName() {
        const answer = await inquirer
            .prompt({
                message: "Enter name for Employee?",
                type: "input",
                name: "employeesName",
            });
        this.name = answer.employeesName;
    }
}

class Menu {
    constructor() {
    }

    async showMenu() {
        const answer = await inquirer
            .prompt({
                name: "choice",
                type: "list",
                message: "Employee or Intern?.",
                choices: ["Employee", "Intern"]
            });
        this.answer = answer.choice;
    }
}

class Employee {
    constructor() {
    }

    async employeeName() {
        const answer = await inquirer
            .prompt({
                name: "choice",
                type: "list",
                message: "Employee or Intern?.",
                choices: ["Employee", "Intern"]
            });
        this.answer = answer.choice;
    }
}

class Intern {
    constructor() {
    }

    async showMenu() {
        const answer = await inquirer
            .prompt({
                name: "choice",
                type: "list",
                message: "Employee or Intern?.",
                choices: ["Employee", "Intern"]
            });
        this.answer = answer.choice;
    }
}

(async () => {
    const testExample = new Employee();
    const menu = new Menu()
    await testExample.getName();

    await menu.showMenu()
    console.log(testExample.name)
    console.log(menu.answer)

    // fs.writeFile('test.txt', id, (err) =>
    // err ? console.log(err) : console.log('Successfully created README.md file!'))
})()

// async function showMenu() {
//    const response = await inquirer
//         .prompt({
//             name: "license",
//             type: "list",
//             message: "Please select a license based on user permissions you require...",
//             choices: ["I need to work in a community", "I want it permissable", "I want to share improvments only"]
//         });
//        return response.license
// }

