// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// licenseBadge(data.license) || ""

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

function generateInstallation() {
  if (!confirmInstallation) {
    return ""
  } else {
    return `## Installation
    ${answers.installation}`
  }
}

function generateContributing() {
  if (!confirmContributing) {
    return ""
  } else {
    return `## Contributing
    ${answers.contributing}`
  }
}

function generateTests() {
  if (!confirmTests) {
    return ""
  } else {
    return `## Tests
    Tests for this application can be found here: ${answers.tests}`
  }
}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#Usage)
  - [Contributing](#Contributing)
  - [Tests](#Tests)
  - [License](#License)
  - [Questions](#Questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## License
  This project is licensed under ${data.license}
  
  ## Questions
  If you have any questions, I can be reached at ${data.email}, and my GitHub username is ${data.githubUsername}.
`;
}

export default { generateMarkdown }