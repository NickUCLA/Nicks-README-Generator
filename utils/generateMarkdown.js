function renderLicenseBadge(license) {
  if (license === "None") {
    return "";
  }
  return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;
}

function renderLicenseLink(license) {
  if (license === "None") {
    return "";
  }
  return `* [License](#license)`;
}

function renderContributingLink(contributing) {
  if (contributing === "") {
    return "";
  }
  return `* [Contributing](#contributing)`;
}

function renderTestsLink(tests) {
  if (tests === "") {
    return "";
  }
  return `* [Tests](#tests)`;
}

function renderLicenseSection(license) {
  if (license === "None") {
    return "";
  }

  const licenseLink = renderLicenseLink(license); // Get the license link
  const licenseURL = generateLicenseURL(license); // Generate the license URL

  return `## License

This project is licensed under the ${license} License - see the [LICENSE](${licenseURL}) file for details. \n 
${renderLicenseBadge(license)}`;
}

function generateLicenseURL(license) {
  // Define a map of license names to their corresponding URLs
  const licenseURLs = {
    MIT: "https://opensource.org/licenses/MIT",
    "Apache 2.0": "https://www.apache.org/licenses/LICENSE-2.0",
    "GPL 3.0": "https://www.gnu.org/licenses/gpl-3.0",
  };

  return licenseURLs[license] || "#"; // Return the URL or "#" if not found
}

function renderContributingSection(contributing) {
  if (contributing === "") {
    return "";
  }

  return `## Contributing

  ${contributing}`;
}

function renderTestSection(tests) {
  if (tests === "") {
    return "";
  }

  return `## Tests

  ${tests}`;
}

// generates markdown file
function generateMarkdown(data) {
  return `# ${data.title}
  
## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
${renderContributingLink(data.contributing)}
${renderTestsLink(data.tests)}
${renderLicenseLink(data.license)}
* [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

${renderContributingSection(data.contributing)}

${renderTestSection(data.tests)}

${renderLicenseSection(data.license)}

## Questions
For questions or concerns, please contact me at [GitHub Profile](https://github.com/${
    data.githubUsername
  }) or email me at ${data.email}.
`;
}

module.exports = generateMarkdown;
