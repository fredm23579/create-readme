const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the title of your project?',
        validate: input => input ? true : 'Project title is required.'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project:',
        validate: input => input ? true : 'Description is required.'
    },
    {
        type: 'input',
        name: 'installationInstructions',
        message: 'Provide installation instructions:',
        validate: input => input ? true : 'Installation instructions are required.'
    },
    {
        type: 'input',
        name: 'usageInstructions',
        message: 'Describe how to use your project:',
        validate: input => input ? true : 'Usage instructions are required.'
    },
    {
        type: 'input',
        name: 'contributionInstructions',
        message: 'Provide guidelines for contributing to your project:',
    },
    {
        type: 'input',
        name: 'testInstructions',
        message: 'Provide instructions on running tests:',
    },
    {
        type: 'list',
        name: 'licenseChoice',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'None'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:',
        validate: input => input ? true : 'GitHub username is required.'
    },
    {
        type: 'input',
        name: 'questionsEmail',
        message: 'Enter your email address:',
        validate: input => input ? true : 'Email address is required.'
    },
    {
        type: 'input',
        name: 'liveSiteLink',
        message: 'Enter the link to the live site (if available):',
    },
    {
        type: 'input',
        name: 'siteDemoLink',
        message: 'Enter the link to a demo or walkthrough (if available):',
    },
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error('Error writing to file:', err);
            return;
        }
        console.log('README.md successfully generated!');
    });
}

// Function to initialize app
function init() {
    console.log("Welcome to the ReadMe Generator!");
    inquirer.prompt(questions)
        .then((answers) => {
            const markdownContent = generateMarkdown(answers);
            writeToFile('README.md', markdownContent);
        })
        .catch((error) => {
            console.error('Error during application initialization:', error);
        });
}

// Initialize the application
init();
