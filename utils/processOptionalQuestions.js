import { optionalQuestions } from "./questions.js";
import inquirer from "inquirer";

export async function processOptionalQuestions() {
    const finalAnswers = {}
    for(const question of optionalQuestions) {
        const { confirm } = await inquirer.prompt([{
            type: "confirm",
            name: "confirm",
            message: `Do you need a ${question.name} section?`
        }])
        if(confirm) {
            const answerObject = await inquirer.prompt([question])
            finalAnswers[question.name] = answerObject[question.name]
        } else {
            finalAnswers[question.name] = ""
        }
    }
    return finalAnswers
}