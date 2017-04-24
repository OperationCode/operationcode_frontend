
# OperationCode Frontend

This is OperationCode.org's repository for their new front-end implementation using React.js

## Table Of Contents
- [Technologies](#technologies)
- [Getting Started](#getting-started)
  - [Brush up on Development Tools](#brush-up-on-development-tools)
    - [Git and basic Command Line](#git-and-basic-command-line)
    - [NodeJS](#nodejs)
  - [Development Environment](#development-environment)
  - [Mac OSX](#mac-osx)
    - [Update your mac](#update-your-mac)
    - [Xcode Command Line Tools](#xcode-command-line-tools)
    - [Homebrew](#homebrew)
    - [Git](#git)
    - [NodeJS](#nodejs-1)
  - [Windows](#windows)
    - [Git](#git-1)
    - [NodeJS](#nodejs-2)
  - [Developing Operation Code Frontend](#developing-operation-code-frontend)
    - [File Structure](#file-structure)
    - [Scenes / Component Structure](#scenes--component-structure)
      - [Components](#components)
      - [Styles](#styles)
    - [Running the development Server](#running-the-development-server)
  - [Production Builds](#production-builds)
    - [Static Site](#static-site)
    - [Docker Container](#docker-container)
- [Resources](#resources)
- [Contribute](#contribute)
- [License](#license)

## Technologies

- [NodeJS](https://www.nodejs.org/) - Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.
- [React.js](https://facebook.github.io/react/) - Facebook's popular JavaScript front-end framework.
- [Create-React-App](https://github.com/facebookincubator/create-react-app) - Create React App was initially used to handle boilerplate.  We have since Ejected and customized some of the scripts.
- [Webpack](https://webpack.js.org/) - Webpack acts as a module bundler and almost entirely dispenses with the need for a task runner, like Grunt or Gulp.
- [Babel](https://babeljs.io/) - JavaScript compiler to unify all the different versions of JS that may have been used or will be used in the future.
- [Yarn](https://yarnpkg.com/) - Facebook's open source JavaScript package manager. There are a few differences between Yarn and Node Package Mangaer (npm), but the main differentiation is that Yarn locks dependencies so your project doesn't break when external resources change their code.
- [CSS Modules](https://css-tricks.com/css-modules-part-1-need/) - CSS Modules allow us to encapsulate CSS with components.

## Getting Started

### Brush up on Development Tools

#### Git and basic Command Line

You will be working with Git and Github to manage source code.  Understanding the basics and how to set things up will be helpful.
- [Learn about Git and Github](https://help.github.com/articles/git-and-github-learning-resources/)
- [Github for windows](https://mva.microsoft.com/en-US/training-courses/github-for-windows-users-16749?l=KTNeW39wC_6006218965)
- [Github Command Line Training](https://services.github.com/on-demand/github-cli)

Getting comfortable with the Bash Shell will be helpful for both Windows and Mac.  You may also want to learn about the Windows Command Prompt if you are using Windows.
- For Mac or Linux - [Learn console commands](https://learnpythonthehardway.org/book/appendixa.html)
- For Windows - [Learn Windows Command Prompt](https://www.youtube.com/watch?v=MBBWVgE0ewk)

#### NodeJS

The OperationCode front end runs on NodeJS.  Learning the basics of NodeJS will be helpful.
- [NodeJS Tutorial](https://www.tutorialspoint.com/nodejs/)

### Development Environment

  You will need a few technologies installed in order to build and run this application.  The installation of these is not always straightforward, but we will do our best to guide you through the process.

  The installation will depend on which operating system you are running.

### Mac OSX

#### Update your mac

  In order to run the latest version of everything, you will need to be on the latest version of Mac OSX.  It's entirely possible to get everything working without updating, but this is the easiest and recommended approach.
  - [Apple instructions to Upgrade Mac OSX](http://www.apple.com/osx/how-to-upgrade/)

#### Xcode Command Line Tools

  If you have xcode installed ensure that it is updated to the latest version through the app store.  The full xcode package is not required for the command line tools.

  Running the following in your terminal window should prompt you to install the xcode command line tools if you don't already have it installed.
  ```console
  gcc
  ```
  You can verify installation with the command below, you should see similar output:
  ```console
    gcc --version
    Configured with: --prefix=/Library/Developer/CommandLineTools/usr --with-gxx-include-dir=/usr/include/c++/4.2.1
    Apple LLVM version 6.0 (clang-600.0.54) (based on LLVM 3.5svn)
    Target: x86_64-apple-darwin14.0.0
    Thread model: posix
  ```
  - [A guide to installing xcode command line tools](http://railsapps.github.io/xcode-command-line-tools.html)

#### Homebrew

  - [Homebrew website](https://brew.sh/)
  - Paste the code below into a terminal window to install homebrew.
  ```console
  /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
  ```

#### Git

The easiest way to install git is with homebrew.
```console
brew install git
```

You can also install Github Desktop for the Graphical interface into github.  There is no need to install the Command Line tools if you installed git with homebrew.
- [Github Desktop](https://desktop.github.com/)

#### NodeJS

You can install NodeJS a few different ways.  Again, the easiest way to install it is with homebrew
```console
brew install node
```

Another option is to install Node Version Manager, this is helpful if you need to use multiple versions of node for different projects.
- [Node Version Manager](https://github.com/creationix/nvm)

n is another project that manages node versions with possibly an easier install and less maintenance.
-[n](https://github.com/tj/n)

The other option is to install the nodejs package from the official website
- [Nodejs Download Page](https://nodejs.org/en/download/)

### Windows

#### Git

You have many options for getting Git on Windows.  We recommend using Git for Windows as it gives you a bash shell which can be very powerful and help you start to learn linux commands.

- [Git For Windows](https://git-scm.com/download/win)

Execute the Installer and follow the prompts.  Run Git and included tools from Windows Command Prompt is handy, but beware you will be replacing a few windows commands that you probably don't use anyways.

You can also install Github Desktop for a GUI Interface to Github.  If you do this you don't want to install the Command Line tools, as Git For Windows is a more recent version.

- [Github for Desktop](https://desktop.github.com/)

#### NodeJS

There are many ways and guides to install NodeJS on Windows.  The resources below are from Microsoft.
- [NodeJS On Windows Guidelines](https://github.com/Microsoft/nodejs-guidelines)
- [Configuring your Windows development environment for NodeJS](https://github.com/Microsoft/nodejs-guidelines/blob/master/windows-environment.md#configuring-your-windows-development-environment)

One way to install NodeJS for windows is to simply download and execute the MSI Package from the official downloads page.
- [Nodejs Download Page](https://nodejs.org/en/download/)

To test the installation open up a Command Prompt or Git Bash and enter the following commands:
```console
node --version
npm --version
```
If your installation was sucessful you will get the versions of node and npm that were installed.

### Developing Operation Code Frontend

#### File Structure

```
├── config (Build Configuration Files)
│   ├── jest
│   ├── env.js
│   ├── paths.js
│   ├── polyfills.js
│   ├── webpack.config.dev.js
│   └── webpack.config.prod.js
├── public (Static files to be included in the build.  Icon files excluded for brevity)
│   ├── favicon.ico
│   ├── index.html
├── scripts (Build Scripts)
│   ├── build.js
│   ├── start.js
│   └── test.js
├── src
│   ├── images
│   ├── scenes (see scenes section below)
│   ├── shared (Shared React Components and Services)
│   ├── styles (Shared Styles to be used with CSS Modules Composition)
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   └── index.js
├── Dockerfile
├── LICENSE
├── README.md
├── docker-compose.yml
├── index.html
├── package.json
├── server.js
└── yarn.lock

```

#### Scenes / Component Structure

The idea of scenes were inspired by this post:
- [How to better organize your react applications](https://medium.com/@alexmngn/how-to-better-organize-your-react-applications-2fd3ea1920f1)

Scenes give us the ability to have different views of our application.  For example, we could have a home page view, or a mentors page view with a different navigation menu.

##### Components
Components should be nested in a scene, or within another component.  The idea is that a component will be declared at the level that it will be shared.  If a component can be shared across the whole site, it should go in the /shared folder.

##### Styles
We are using CSS modules for styling.  Each components styles should be next to the component, and contain all the information to render that component.  React favors [Composition over Inheritance](https://facebook.github.io/react/docs/composition-vs-inheritance.html)

```
├── scenes
│   └── home
│       ├── about
│       │   └── about.js
│       ├── families
│       │   ├── facts
│       │   └── jumboQuote
│       ├── footer
│       │   ├── footer.css
│       │   └── footer.js
│       ├── header
│       │   ├── logo
│       │   ├── topNav
│       │   ├── header.css
│       │   └── header.js
│       ├── landing
│       │   ├── landing.css
│       │   └── landing.js
│       ├── home.css
│       └── home.js
```

#### Running the development Server

- `npm install -g yarn` - Install Yarn Globally

- `yarn install` - Install Package dependencies.  Be sure to run this each time you pull from Github to update the dependencies.

- `yarn start` - Start the development server

### Production Builds

#### Static Site

- `yarn run build` - This bundles the application into static files for production (minimization, post-processing, etc.)

- `yarn test` - This starts the test runner.

- `yarn start:server` - Runs express js serving production static files.

#### Docker Container

- `docker-compose up -d --build` - Builds and starts the Docker Container listening port 80.

## Resources

- [Learning React With Create-React-App](https://medium.com/@diamondgfx/learning-react-with-create-react-app-part-1-a12e1833fdc)
- [What Is Webpack?](https://survivejs.com/webpack/what-is-webpack/)
- [Routed React with Express.js and Docker](https://medium.com/@patriciolpezjuri/using-create-react-app-with-react-router-express-js-8fa658bf892d)
- [React Lifecycle Methods - How And When To Use Them](https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1)
- [Let's test React components with TDD< Mocha, Chai, and jsdom](https://medium.freecodecamp.com/simple-react-testing-d9e25ec87e2)

## Contribute

[Operation Code Contribution Guide](https://github.com/OperationCode/START_HERE)

## License

[MIT](LICENSE) © OperationCode