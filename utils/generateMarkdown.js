// function that generates markdown
// Pls note I used the auto-shield generator for license depending on username / repo name, which is why I ask for both in the prompt
function generateMarkdown(data) {
return `# ${data.project}
![license](https://img.shields.io/github/license/${data.username}/${data.repo})

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