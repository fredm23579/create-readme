
// Function to return a license badge based on which license is passed in
function renderLicenseBadge(license) {
  const badges = {
      MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
      'Apache 2.0': '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
      'GPL 3.0': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
      None: ''
  };
  return badges[license] || '';
}

// Function to return the license link
function renderLicenseLink(license) {
  const links = {
      MIT: 'https://opensource.org/licenses/MIT',
      'Apache 2.0': 'https://opensource.org/licenses/Apache-2.0',
      'GPL 3.0': 'https://www.gnu.org/licenses/gpl-3.0'
      // Add more links as needed
  };
  return links[license] || '';
}

// Function to return the license section of README
function renderLicenseSection(license) {
  if (!license || license === 'None') return '';
  return `
## License
This project is covered under the ${license} license. To learn more, see the accompanying LICENSE file or visit [${renderLicenseLink(license)}](${renderLicenseLink(license)}).
  `;
}

// Function to render the live site link section
function renderLinkSection(liveSiteLink) {
  if (!liveSiteLink) return '';
  return `
## Live Site
[Click here to view the live site!](${liveSiteLink})
  `;
}

// Function to render the demo section
function renderDemo(demoLink) {
  if (!demoLink) return '';
  return `
## Demo
![Demo](${demoLink})
  `;
}

// Function to generate markdown for README
function generateMarkdown(data) {
  const {
      projectTitle,
      description,
      installationInstructions,
      usageInstructions,
      contributionInstructions,
      testInstructions,
      github,
      questionsEmail,
      licenseChoice,
      liveSiteLink,
      siteDemoLink
  } = data;

  return `
# ${projectTitle}

${renderLicenseBadge(licenseChoice)}

## Description
${description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

${renderLicenseSection(licenseChoice)}
${renderLinkSection(liveSiteLink)}
${renderDemo(siteDemoLink)}

## Installation
${installationInstructions}

## Usage
${usageInstructions}

## Contributing
${contributionInstructions}

## Tests
${testInstructions}

## Questions
Contact me:
* GitHub: [${github}](https://github.com/${github})
* Email: ${questionsEmail}
  `;
}

module.exports = generateMarkdown;
