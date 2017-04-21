# OperationCode Frontend

This is OperationCode.org's repository for their new front-end implementation using React.js


## Table of Contents

- [Technologies](#technologies)
- [Resources Used](#resources-used)
- [Install](#install)
- [Contents](#contents)
- [Contribute](#contribute)
- [License](#license)


## Technologies

- [React.js](https://facebook.github.io/react/) - Facebook's popular JavaScript front-end framework.
- [Create-React-App](https://github.com/facebookincubator/create-react-app) - Facebook's generator (think boilerplate, but more) in response to critique of React being difficult to learn.
- [Webpack](https://webpack.js.org/) - Webpack acts as a module bundler and almost entirely dispenses with the need for a task runner, like Grunt or Gulp.
- [Babel](https://babeljs.io/) - JavaScript compiler to unify all the different versions of JS that may have been used or will be used in the future.
- [Yarn](https://yarnpkg.com/) - Facebook's open source JavaScript package manager. There are a few differences between Yarn and Node Package Mangaer (npm), but the main differentiation is that Yarn locks dependencies so your project doesn't break when external resources change their code.
- [npm](https://www.npmjs.com/) - While Yarn is handling our projects dependencies, we still use npm to run scripts as you'll see further below.
- [CSS Modules](https://css-tricks.com/css-modules-part-1-need/) - What are CSS Modules and why do we need them?


## Resources Used

- [Learning React With Create-React-App](https://medium.com/@diamondgfx/learning-react-with-create-react-app-part-1-a12e1833fdc)
- [What Is Webpack?](https://survivejs.com/webpack/what-is-webpack/)
- [Routed React with Express.js and Docker](https://medium.com/@patriciolpezjuri/using-create-react-app-with-react-router-express-js-8fa658bf892d)
- [React Lifecycle Methods - How And When To Use Them](https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1)
- [Let's test React components with TDD< Mocha, Chai, and jsdom](https://medium.freecodecamp.com/simple-react-testing-d9e25ec87e2)


## Install

### Development Build
- `npm install -g yarn` Install Yarn Globally

- `yarn install` - Install Package dependencies

- `yarn start` - Start the development server

### Production build
- `yarn run build` - This bundles the application into static files for production (minimization, post-processing, etc.)

- `yarn test` - This starts the test runner.

- `yarn start:server` - Runs express js serving production static files.

### Production Build with Docker Compose

- `docker-compose up -d --build` Builds and starts the Docker Container listening port 80.

## Contents

TODO: explain file structure and where to add resources / components.

## Contribute

[Operation Code Contribution Guide](https://github.com/OperationCode/START_HERE)


## License

[MIT](LICENSE) © OperationCode