// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
// Switch case to select the link to the license information depending on the License chosen

  switch (license){
    case "MIT":
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
      
    case "GNU GPL v3":
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"  

    case "GNU AGPL v3":
    return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)"  

    case "Mozilla Public License 2.0":
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"  

    default:
      return "";
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // Switch case to select the link to the badge depending on the License chosen
  switch (license){
    case "MIT":
      return "[MIT](https://choosealicense.com/licenses/mit/)"
      
    case "GNU GPL v3":
      return "[GNU GPL v3](https://choosealicense.com/licenses/agpl-3.0/)"
      
    case "GNU AGPL v3":
      return "[GNU AGPL v3](https://choosealicense.com/licenses/agpl-3.0/)"
      
    case "Mozilla Public License 2.0":
      return "[Mozilla Public License 2.0](https://choosealicense.com/licenses/mpl-2.0/)"
    
    default:
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `${renderLicenseBadge(license)}

   ${renderLicenseLink(license)}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // Start to arrange tha answers in the README text
  return `# ${data.title}
  
  ## Description

  ${data.description}

  ## Questions

  My email : ${data.email}
  My Github page : https://github.com/${data.gitHubUsername}

  ## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${data.installation}

## Usage

${data.usage}

## Credits

${data.credits}

## License

${renderLicenseSection(data.license)}


## Features

${data.features}

## How to Contribute

${data.contribute}

  `;
}

// Exporting the generateMarkdown Object
module.exports = {generateMarkdown};
