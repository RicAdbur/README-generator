// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
import { licenseBadge, licenseLinks } from "./licenseInfo.js"
// ${licenseBadge.value} || ""

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}


// TODO: Create a function to generate markdown for README
export function generateMarkdown( { title, description, installation, usage, license, tests, contributing, githubUsername, email } ) {
  const badge = licenseBadge(license)
  const licenseLink = licenseLinks(license)

  const finalContributingString = !!contributing ? `
  ## Contributing
  ${contributing}
  ` : contributing

  const finalInstallationString = !!installation ? `
  ## Installation
  ${installation}
  ` : installation

  const finalTestsString = !!tests ? `
  ## Tests
  Tests for this project can be found in ${tests}
  ` : tests

  
  return `
  
  # ${title}

  ${badge}

  ${description}
  
  > ## Table of Contents
  > - **[Installation](#installation)**
  > - **[Usage](#usage)**
  > - **[Contributing](#contributing)**
  > - **[Tests](#tests)**
  > - **[License](#license)**
  > - **[Questions](#questions)**
  
  ${finalInstallationString}
  
  ## Usage
  ${usage}
  
  ${finalContributingString}
  
  ${finalTestsString}
  
  ## License
  This project is licensed under ${licenseLink}
  
  ## Questions
  If you have any questions, I can be reached at ${email}, and my GitHub username is ${githubUsername}.
`
}