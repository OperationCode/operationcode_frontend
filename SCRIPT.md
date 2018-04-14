# Script: How to Contribute

**Person 1**: Hey [**Person 2**], I’d like to get started contributing to Operation Code. Could we walk through my first commit together? 

**Person 2**: Sure, [**Person 1**]. Before we get started, let’s take a moment to familiarize ourselves with the file structure of the project. The file tree looks something like this. (Show picture of tree in the `CONTRIBUTING.md` file). First, you’ll notice that the majority of our React components live in a directory called `scenes`. We took the idea of scenes from a blog post (referenced in the Guide) that details a better way of organizing React applications. Each scene has what is needs to run on its own including tests, images and styles. So, you’ll find JavaScript files for each feature of the site in a directory named after their feature. For example, `facts.js` lives inside `facts/` which lives inside `families/`. 

**Person 1**: So you’re saying components should be nested in a scene or another component? 

**Person 2**: Exactly. And if the component can be shared across the whole site it should go in the `shared/` folder. For styles, you’ll see that each component’s styles live next to that component, and should contain everything that component needs to render. (Show tree of scenes folder). 

**Person 1**: Sounds great. I think I’m ready to start writing some code now. How do I get the project running locally? 

**Person 2**: Well, I’ll assume you’re comfortable with using the command line before we move forward. With that said, the project has some dependencies that you’ll need before you get going, namely `node` version 6 or greater, `npm` version 4 or greater and `yarn` version 0.21 or greater. Here’s how to get those on your machine. (The pair either navigates to those sites and downloads Node + Yarn or uses the command line + Homebrew.) 

**Person 1**: I see we use some other technologies. 

**Person 2**: Yes, I mentioned React before. We also use Webpack as a task runner and Babel to transpile our JavaScript so that you can get all of the latest features. You don’t need to know how those last two work in depth before you start contributing, though. We also use CSS Modules for our styles, and have linked a article on the Guide that does a great job explaining the motivation behind CSS Modules and how they work. 

**Person 1**: Great! What next?

**Person 2**: We’ll fork and clone the repository. (Pair navigates to repo page and shows how forking/cloning is done). We’ll also want to add Operation Code’s repo to our upstream remote. That means that we’ll be able to add and commit changes to both our forked copy and Operation Code’s copy of the repository. 

**Person 1**: That sounds good! And then I’ll push up my branch when I’m ready to make a Pull Request? 

**Person 2**: Exactly--let’s set that up and create a new branch for our work (Pair adds the original repo to the remote and creates a new branch.) Now that we’re ready to do our work, we’ll want to get the project running locally by using the command `yarn start`. Now you’re ready to make your changes! 

(Pair pulls up Issue `CODE_CHANGE_HERE` and makes the necessary changes. I estimate about 1 minute for this and 1 minute for pushing and making the PR, assuming it’s a relatively simple change). 

**Person 2**: Now we'll push our work (Person 2 goes over `git add` `commit` and `push`) and create our Pull Request. To do that, we'll have to navigate to Operation Code's repository and make the request against the branch that we just pushed up. (The pair navigates to the repo and Person 2 shows how to make a PR.)

**Person 1**: Thanks so much, [**Person 2**]! It’s been great to make my first contribution to the project. What if I’m feeling a little unsure about the various development tools? 

**Person 2**: I’m glad you asked! We have a section of the Contributing Guide devoted to brushing up on development tools like Git and Node. (Show this section of the guide.)  You’ll also want to reference the Development Environment section of the guide specific to your operating system to make sure you’re good to go with other development tools. Don’t hesitate to reach out to the maintainers if you have any questions! 

