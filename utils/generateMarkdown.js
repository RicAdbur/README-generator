import { licenseBadge, licenseLinks } from "./licenseInfo.js"

// dynamic table of contents generation
function renderTableOfContents(tableStrings) {
  return tableStrings.map(tableString => {
    return `  > - **[${tableString}](#${tableString})**`
  }).join("\n")
}

const tableOfContents = renderTableOfContents([
  "installation",
  "usage",
  "tests",
  "contributing",
  "questions",
])

// markdown generator function
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