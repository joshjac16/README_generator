// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  // prettier-ignore
  if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`;
  } else if (license === "Mozilla") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]`;
  } else if (license === "Boost Software 1.0") {
    return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]`;
  } else if (license === "Apache 2.0") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`;
  }else if (license === "GNU LGPLv3") {
    return `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)]`;
  }else if (license === "GNU GPLv3") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`;
  }else if (license === "GNU AGPLv3") {
    return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)]`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `[MIT license](https://choosealicense.com/licenses/mit/)`;
  } else if (license === "Mozilla") {
    return `[Mozilla license](https://choosealicense.com/licenses/mpl-2.0/)`;
  } else if (license === "Boost Software 1.0") {
    return `[Boost Software 1.0](https://choosealicense.com/licenses/bsl-1.0/)`;
  } else if (license === "Apache 2.0") {
    return `[Apache 2.0](https://choosealicense.com/licenses/apache-2.0/)`;
  } else if (license === "GNU LGPLv3") {
    return `[GNU LGPLv3](https://choosealicense.com/licenses/lgpl-3.0/)`;
  } else if (license === "GNU GPLv3") {
    return `[GNU GPLv3](https://choosealicense.com/licenses/gpl-3.0/)`;
  } else if (license === "GNU AGPLv3") {
    return `[GNU AGPLv3](https://choosealicense.com/licenses/agpl-3.0/)`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return ` 
  ${renderLicenseBadge(license)}\n
  ${renderLicenseLink(license)}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ### Description
  ${data.Description}



  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Github](#github)
  * [Email](#email)



  ### Installation
  ${data.Installation}

  ### Usage 
  ${data.Usage}

  ### License
  ${renderLicenseSection(data.license)}

  ### Contributing
  ${data.contributing}

  ### Tests
  ${data.tests}

  ### Github
  Please check my other projects at 
  (https://github.com/${data.userName})

  ### Email
  ${data.userEmail}

`;
}

module.exports = generateMarkdown;
