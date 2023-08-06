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
        type: "confirm",
        name: "needInstallation",
        message: "Does your application require installation instructions?"
    },

    {
        type: "input",
        name: "installation",
        message: "Provide installation instructions, if any:"
    },

    {
        type: "input",
        name: "usage",
        message: "Describe how your application is used:"
    },

    {
        type: "list",
        name: "license",
        message: "What type of license do you want to use for this project?",
        choices: ["MIT License", "Apache License 2.0", "Mozilla Public License 2.0", "GNU GPLv3", "GNU AGPLv3", "GNU LGPLv3", "Boost Software License 1.0", "The Unlicense"],
    },

    {
        type: "confirm",
        name: "needTests",
        message: "Did you include any tests with your application?"
    },

    {
        type: "input",
        name: "tests",
        message: "List any tests you used for this project, if any:"
    },

    {
        type: "input",
        name: "contributors",
        message: "List any contributors you may have worked with for this project:"
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