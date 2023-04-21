//  Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None'){
    return `![github license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return""
}
//  Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None"){
    return `\n* [License](#license)\n`;
  }
  return ""
}

// TODO: Create a function to generate markdown for README
function generateMarkdown ({title, description, installation, usage, credits, license}) {
  return `# ${title}
  ${renderLicenseBadge(license)}

    ##Description
    ${description}

    ##Table of Contents

      *[Installation](#installation)
      *[Usage](#usage)
      *[Credits](#credits)
      *[License](#license)

    ##Installation
    ${installation}

    ##Usage
    ${usage}

    ##Credits
    ${credits}

    ##License
    ${license}
`;
}

module.exports = generateMarkdown;
