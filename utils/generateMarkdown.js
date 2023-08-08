import { licenseBadge, licenseLinks } from "./licenseInfo.js"

function renderTableOfContents(tableStrings) {
  return tableStrings.map(tableString => {
    return `  > - **[${tableString}](#${tableString})**`
  }).join("\n")

}

export function generateMarkdown( { title, description, installation, usage, license, tests, contributing, githubUsername, email } ) {
  const badge = licenseBadge(license)
  const licenseLink = licenseLinks(license)

  const finalContributingString = !!contributing ? `
  ## Contributing
  ${contributing}
  ` : contributing

  const tableOfContentsContributing = !!contributing ? `
  > - **[Contributing](#contributing)**` : contributing

  const finalInstallationString = !!installation ? `
  ## Installation
  ${installation}
  ` : installation

  const finalTestsString = !!tests ? `
  ## Tests
  Tests for this project can be found in ${tests}
  ` : tests

  const tableOfContents = renderTableOfContents([
    "installation",
    "usage",
    "tests",
    "contributing",
    "questions",
  ])
  console.log(tableOfContents)
  
  return `
  
  # ${title}

  ${badge}

  ${description}

  > ## Table of Contents
${tableOfContents}
  
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