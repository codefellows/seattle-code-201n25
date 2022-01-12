# Debugging

The ideal: Prevent bugs all together.

How do we prevent bugs?

- write code in small chucks, do proof of life
- assertions `if (username) {console.log(username)};`
- use a linter
- console.log stuff
- breakpoints to analyze your code
- meaningful comment in your code

What to do when bugs happen:

- find where the bug is happening
- inspect the code
- identify the problem
- 2nd set of eyes
- run theee code line by line — comment out all your code and add it back line by line until you find where the error is happening
- take a break

How do we find where the problem is?

- console
- READ THE ERROR MESSAGE (refer to the line the error occured on)
- refer to syntax

Things you should concole.log when you expect there is an error:

- Type — is the variable the type you are expecting
- Value - is the variable the value you were expecting at each step
- read the DOCs!!!! Modzilla for JavaScript, and W3 for HTML/CSS
- think about the order your code runs in — tell yourself the story of your code. line by line, write down the variable values at each step.

