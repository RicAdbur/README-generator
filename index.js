import fs from "fs"
import inquirer from "inquirer"
import { questions } from "./utils/questions.js"
import { generateMarkdown } from "./utils/generateMarkdown.js"
import { processOptionalQuestions } from "./utils/processOptionalQuestions.js"


function init() {
    inquirer.prompt(questions)
        .then( async (answers) => {
            const optionalAnswers = await processOptionalQuestions()

            const markdown = generateMarkdown( { ...answers, ...optionalAnswers } )
            fs.writeFile("./generated-READMEs/README.md", markdown, err => {
                if (err) {
                    throw err
                }
                console.log("README file created!")
            })
        })
        .catch((error) => {
            console.log(error)
        })
}


// Function call to initialize app
init();