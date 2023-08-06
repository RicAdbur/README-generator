// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// licenseBadge(license) || ""

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}


function generateInstallation(confirmInstallation) {
  if (!confirmInstallation) {
    return ""
  } else {
    return `## Installation
    ${installation}`
  }
}

function generateContributing(confirmContributing) {
  if (!confirmContributing) {
    return ""
  } else {
    return `## Contributing
    ${contributing}`
  }
}

function generateTests(confirmTests) {
  if (!confirmTests) {
    return ""
  } else {
    return `## Tests
    Tests for this application can be found here: ${tests}`
  }
}

// TODO: Create a function to generate markdown for README
export function generateMarkdown( { title, description, confirmInstallation, installation, usage, license, confirmTests, tests, confirmContributing, contributing, githubUsername, email } ) {
  return `
  # ${title}

  ${description}
  
  > ## Table of Contents
  > - **[Installation](#installation)**
  > - **[Usage](#usage)**
  > - **[Contributing](#contributing)**
  > - **[Tests](#tests)**
  > - **[License](#license)**
  > - **[Questions](#questions)**
  
  ## Installation
  ${installation}
  
  ## Usage
  ${usage}
  
  ## Contributing
  ${contributing}
  
  ## Tests
  Tests for this project can be found in ${tests}
  
  ## License
  This project is licensed under [${license}]()
  
  ## Questions
  If you have any questions, I can be reached at ${email}, and my GitHub username is ${githubUsername}.
`;
}

// export default { generateMarkdown }