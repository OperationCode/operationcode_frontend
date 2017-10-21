# ✨ :us: OperationCode Frontend :us: ✨

-------

[![Build Status](https://travis-ci.org/OperationCode/operationcode_frontend.svg?branch=master)](https://travis-ci.org/OperationCode/operationcode_frontend)
[![PRs Welcome][prs-badge]][prs]

[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=social-square
[prs]: http://makeapullrequest.com

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Twitter Follow](https://img.shields.io/twitter/follow/operation_code.svg?style=social&label=Follow&style=social)](https://twitter.com/operation_code)

This is the repository for the front-end portion of https://operationcode.org.

## Hacktoberfest

If you're here looking for a place to contribute pull requests as part of GitHub's "Hacktoberfest", you're in the right place! Please look forward to an increased amount of documentation and tickets. We highly recommend joining our organization at operationcode.org to receive an invite to our Slack team. From there, you'll join the `#oc-projects` channel. You can get help from multiple professional developers and people who have worked on the application since day 1! Happy hacking!

### Quick Start

#### TLDR

Prerequisites:

- [Yarn](https://yarnpkg.com/en/)
- [Docker](https://www.docker.com/)
- MacOS or Linux with a globally installed and available `git`
- [For Windows User quick start installation](https://github.com/OperationCode/operationcode_frontend/blob/master/CONTRIBUTING.md#windows)

```
yarn
```

```
yarn run backend
```
If the command doesn't work the first time, run it again.

In another shell tab:
```
yarn start
```

If you're an experienced developer, please navigate to our [Quick Start Guide](https://github.com/OperationCode/operationcode_frontend/blob/master/CONTRIBUTING.md#quick-start-guide).

### What is a frontend?
When you visit our website you're interacting with two systems, a frontend application and a backend application. The frontend application (where you are now) is responsible for displaying images, text and data on our web pages.
Frontend applications are usually written using a combination of HTML, CSS, and Javascript and utilize one or more frameworks such as Angular, Backbone, Vue, and React. https://operationcode.org uses React.

### What is a backend?
The backend is responsible for providing data to the front end to display, and processing data entered into the frontend, and running various jobs like inviting new users to Slack, or signing them up for our newsletter. The https://operationcode.org backend is written in Rails and can be viewed at https://github.com/OperationCode/operationcode_backend.

Our backend API blueprint can be found here

### Mocking Backend Server API

We are using [Apiary.io](http://docs.operationcodeapi.apiary.io) for our Backend documentation. It also includes a Mocking Server so you don't have to stand up the whole backend. You just need to hit the Mock API endpoints for whatever it is you're testing.

To use, navigate to [Apiary.io](http://docs.operationcodeapi.apiary.io).

For example, you want to gather all CodeSchool Members. Click on `CodeSchool | Collection` on the left-hand side. Select `List All CodeSchool Members`.

A form will populate. You can switch to an Example Code in the langauge of your choosing. More than likely it will be JavaScript on the front-end.

In the dropdown menu, select `Mock Server` and click on `Try`.

You will see a `GET` request with the mock endpoint url. You can now copy and paste that into your front-end to test your code.

Don't forget to remove the mock endpoint url when committing your changes for production. Reset your values and select `Production` to get the correct endpoint url.

### Contribute
Want to contribute to this repo? Check out our comprehensive
[Contributing Guide](https://github.com/OperationCode/operationcode_frontend/blob/master/CONTRIBUTING.md)

### License
This project is licensed under the terms of the MIT license.
