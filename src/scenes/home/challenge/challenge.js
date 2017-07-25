import React, { Component } from 'react';
import axios from 'axios';
import Section from 'shared/components/section/section';
import namesFile from 'operationcode_challenge/names.txt';
import styles from './challenge.css';

class Challenge extends Component {
  constructor() {
    super();
    this.state = {
      names: ''
    };
  }

  componentDidMount() {
    axios.get(namesFile).then((response) => {
      const names = response.data;
      console.log(names);
      this.setState({ names });
    });
  }

  render() {
    return (
      <div>
        <Section title="Operation Code Challenge" theme="white" className={styles.displayBlock}>
          <p>
            Welcome to the Operation Code challenge! The goal of this challenge is to get you to easily commit your first change to a program, see the results of the change, and leave your mark on Operation Code itself!<br />
            To do this we&apos;re going to take a look at a source code repository, clone the repository, make a change to a file and finally create a pull request. Let&apos;s get started!
          </p>
          <p>
            The first step we need to take is to visit the Github repository for this page. Github is a website dedicated to hosting source code. You can see all of the code written and used by Operation Code here:<br />
            <a href="https://github.com/OperationCode">https://github.com/OperationCode</a><br />
            Take a moment to explore Github. You can see this page here:
            <a href="https://github.com/OperationCode/operationcode_frontend/src/scenes/home/challenge/challenge.js">https://github.com/OperationCode/operationcode_frontend/src/scenes/home/challenge/challenge.js</a>
          </p>
          <p>
            The next thing we need to do is fork the repository. Forking a repository takes a snapshot of the repo and places that snapshot into your personal area. This allows anyone to make changes to any project and easily contribute them back.<br />
            The source code for this website lives here:<br />
            <a href="https://github.com/OperationCode/operationcode_frontend">https://github.com/OperationCode/operationcode_frontend</a><br />
            Visit this link and click on the <code>Fork</code> button in the top right corner.<br />
            You should see a message like &apos;Forking OperationCode/operationcode_frontend&apos; and in a few moments be redirected to a URL like:<br />
            <a href="">https://github.com/&lt;YOUR_USERNAME&gt;/operationcode_frontend</a><br />
            Congratulations - you now have your very own personal copy of our website!
          </p>
          <p>
            Now lets edit a file to add your name! Click on the <code>opcode_challenge</code> directory and click on the file called <code>names.txt</code>. On the right hand side you should see a pencil icon. This will allow you to edit the file right on github!<br />
            Add your name to the file and then scroll to the bottom. Inside the <code>Commit changes</code> box type <code>Added &lt;YOUR NAME&gt;</code> into the box labeled <code>Update names.txt</code>.<br />
            Check the <code>Create a new branch</code> box and then click <code>Propose file change</code>.<br />
            Now navigate back to the repo we forked from:<br />
            <a href="https://github.com/OperationCode/operationcode_frontend">https://github.com/OperationCode/operationcode_frontend</a>
          </p>
          <p>
            You should see a new box showing <code>Your recently pushed branches</code> with the name of the branch you just created. It should look something like <code>&lt;YOUR USERNAME&gt;:&lt;YOUR USERNAME&gt;-patch-1</code>. To the right of that you should see a <code>Compare & pull request</code> button. Click on that to create your first Pull Request!<br />
            A pull request is how people throughout the world are able to contribute to open source software. When you submit a pull request it notifies the maintainers of the project, and runs some automated checks. The maintainers then look at the new changes and decide if they want it merged into their repository.<br />
            When you&apos;re ready click the <code>Create pull request</code> button. Our staff will be notified and a few minutes after the pull request is accepted and merged your name will show up below!<br />
            Congratulations - you&apos;ve made your first open source commit!
          </p>
        </Section>
        <Section title="Your Name Here">
          <p>
            Here is a list of the people that have completed this before you:
          </p>
          <p className={styles.displayLinebreak}>
            {this.state.names}
          </p>
        </Section>
      </div>
    );
  }
}

export default Challenge;
