// array of questions for inquirer prompts
export const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?"
    },

    {
        type: "input",
        name: "description",
        message: "Provide a one-sentence description of your project:"
    },

    {
        type: "input",
        name: "usage",
        message: "Describe how your application is used:"
    },

    {
        type: "input",
        name: "githubUsername",
        message: "What is your GitHub username?"
    },

    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
];

export const optionalQuestions = [
    {
        type: "input",
        name: "installation",
        message: "Describe how to install your application:"
    },

    {
        type: "input",
        name: "contributing",
        message: "Describe the guidelines for contributing you your project:"
    },

    {
        type: "input",
        name: "tests",
        message: "List the filepath for the folder containing the tests provided with your project:"
    },

    {
        type: "list",
        name: "license",
        message: "What type of license do you want to use for this project?",
        choices: ["MIT License", "Apache License 2.0", "Mozilla Public License 2.0", "GNU GPLv3", "GNU AGPLv3", "GNU LGPLv3", "Boost Software License 1.0", "The Unlicense", "None"],
    },

]