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

// Create a function to generate markdown for README
function generateMarkdown (data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

    ##Table of Contents

      *[Installation](#installation)
      *[Usage](#usage)
      *[Credits](#credits)
      *[License](#license)

  
    ##Description
    ${data.description}

    ##Installation
    ${data.installation}

    ##Usage
    ${data.usage}

    ##Credits
    ${data.credits}

    ##License
    ${data.license}

    #Questions
    * GitHub : ${data.git}
    * E-mail : ${data.email}
`;
}

module.exports = generateMarkdown;
