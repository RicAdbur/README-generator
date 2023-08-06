// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// licenseBadge(answers.license) || ""

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

function generateInstallation(answers) {
  if (!answers.confirmInstallation) {
    return ""
  } else {
    return `## Installation
    ${answers.installation}`
  }
}

function generateContributing(answers) {
  if (!answers.confirmContributing) {
    return ""
  } else {
    return `## Contributing
    ${answers.contributing}`
  }
}

function generateTests(answers) {
  if (!answers.confirmTests) {
    return ""
  } else {
    return `## Tests
    Tests for this application can be found here: ${answers.tests}`
  }
}


// TODO: Create a function to generate markdown for README
export function generateMarkdown(answers) {
  console.log("answers in generateMarkdown function:")
  console.log(answers)
  return `
  # ${answers.title}

  ${answers.description}
  
  > ## Table of Contents
  > - **[Installation](#installation)**
  > - **[Usage](#usage)**
  > - **[Contributing](#contributing)**
  > - **[Tests](#tests)**
  > - **[License](#license)**
  > - **[Questions](#questions)**
  
  ## Installation
  ${answers.installation}
  
  ## Usage
  ${answers.usage}
  
  ## Contributing
  ${answers.contributing}
  
  ## Tests
  Tests for this project can be found in ${answers.tests}
  
  ## License
  This project is licensed under [${answers.license}]()
  
  ## Questions
  If you have any questions, I can be reached at ${answers.email}, and my GitHub username is ${answers.githubUsername}.
`;
}

// export default { generateMarkdown }