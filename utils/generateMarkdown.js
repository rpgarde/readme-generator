// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log('licencebadge')
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
return `# ${data.project}
https://img.shields.io/github/license/${data.username}/${data.repo}

## Description
${data.description}

## Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
Run the following code to install dependencies:\n
        ${data.dependencies}

## Usage
${data.usage}

## License
This project uses ${data.license} license.

## Contributing
${data.contributions}

## Tests
Run the following code in your console to run tests\n
        ${data.test}

## Questions
For any further questions, reach out to ${data.email}

`
}

module.exports = generateMarkdown;

//{project,repo,username,email,description,license,dependencies,test,usage,contributions}