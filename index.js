// TODO: Include packages needed for this application
import fs from "fs"
import inquirer from "inquirer"
import { questions } from "./utils/questions.js"
import { licenseBadge } from "./utils/licenseBadges.js"
// import { generateMarkdown } from "./utils/generateMarkdown.js"

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            console.log(answers)
            generateMarkdown(answers)
        })
        .catch((error) => {
            console.log(error)
        })
}


// Function call to initialize app
init();