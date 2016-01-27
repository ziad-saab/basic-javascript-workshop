# Intro to JavaScript Workshop :)

## Base instructions
* Fork this repo to your own GitHub, and clone your copy in a new Cloud 9 workspace

## Exercise 1: functions!
* Create a new branch `functions` off of master.
* Create a file called `answers.js` and put a one-line comment in the file.
* add/commit the file, and push your `functions` branch to GitHub.
* **Immediately** open a pull request on your `functions` branch.
* Then, do each exercise below in `answers.js`. After completing each exercise, add/commit/push to GitHub. This will let me view your progress immediately in the pull request :)
* **Make sure to write a line or two of comments above the function declaration to explain what the function does**

### Functions
* Write a function that takes a string and returns the first character of the string. Test your function on a few inputs, including the empty string.
* Write a function that takes a string and returns the last character of a string. Test your function on a few inputs, including the empty string.
* Write a function that takes a string and a number, and returns the character at the position represented by the number. The indexing of number should start at 0. Test your function on a few inputs, including the empty string.
* Write a function that takes two numbers and adds them together. Test your function on a few inputs. Write in the comments what happens when you pass something other than a number to your function.
* Write a function that takes two numbers and multiplies them together. Test your function on a few inputs. Write in your comments what happens when you pass something other than a number to your function.
* Write a function that takes two numbers and a string. If the string is ‘add’, then return the sum of the numbers. If the string is ‘subtract’, return the difference. If the string is ‘mult’, return the product. If the string is ‘div’, return the ratio. Otherwise return 0.
* Write a function that takes a string and a number, and returns the string repeated that many number of times. Test your function with various inputs.
* Write a function that takes a string, and returns the reverse of that string. For example, if you pass the function the string “hello”, it should return “olleh”. Test your function on a few inputs, including the empty string.
* Write a function that takes a number and returns the factorial of a number. The factorial of 5 is 5x4x3x2x1. The factorial of 0 is 1. Test your input on a few numbers, including negative numbers.
* Write a function that takes a phrase as a string, and returns the longest word in that phrase. If the phrase contains more than one such word, return the first occurrence. Test your function on a few inputs.
* Write a function that takes a phrase, and returns the same phrase with every word capitalized. For example, if you pass your function "hello world", it should return "Hello World" and if you pass it "HELLO WORLD" or even "HeLLo WoRLD", it will also return "Hello World". Test your function of a few inputs.
* Write a function that takes an array and returns the largest number of the array. Test your function on a few inputs.
* Write a function that takes an array, and returns a filtered array. The filtered array should only contain the truthy values from the initial array. Hint: there is an array method called `filter` that can help you with this :)
* Write a function that takes an array of numbers, and returns the sum of all the numbers in the array.
* Write a function that takes two arrays, and returns an array of all elements that are only in one array. For example, with `[1,2,3]` and `[1,2,4,5]` the function should return `[3,4,5]`. Test your function on different inputs. Hint: you should look up array methods `indexOf` and `slice`.
* **Mini Challenge**: write a function that takes an array and a function as arguments. The function should return a new array that maps every element of the input array by passing it through the function you received. You are not allowed to use `Array.map` for this challenge, otherwise it would be too easy :)

## Challenges
Each challenge should be done in a different branch, **branched off of master**. Give the branch a descriptive name of your choice, and make a pull request when you are done:

### The Fortune Teller
Challenge: create a file called `fortune.js` in your Cloud9 project. Running this file should output a random quote from a list of 10 different quotes. Make sure to add/commit this file and push it to your GitHub.

### The Cow Whisperer
Challenge: create a file called `cowsay.js` in your Cloud9 project. Running this file should output a cow saying a random fortune. Make sure to add/commit this file and push it to your GitHub. If the fortune is longer than 30 characters, you have to wrap it on a new line. For extra brownie points, wrap your fortune at the word level instead of the letter level.

### The Penniless Gambler
Challenge: create a simple HTML file that will only be used for the purposes of running JavaScript in the browser. Create a `guess.js` file and add it to a `<script>` tag of your HTML file. This is simply so you can load your HTML file in the browser and do the challenge: creating a number guessing game.

Generate a random number between 1 and 100. Using the browser functions prompt and alert, ask the user to guess the number. You should give them 4 tries to guess the number. If they guess wrong, tell them if it's higher or lower. If they guess right, congratulate them. Otherwise, give them a message saying what the correct number was, as well as their list of guesses.

### The God of Cows
**EXTREME** challenge: create a file called `real-cowsay.js` inside your Cloud9 project. This is the only challenge that will require usage of some NodeJS functionality. This program will look more like the regular cowsay. Instead of outputting a random fortune like the previous example, it will either take a string on the command line and output that string (with the cow). If no string is provided on the command line, then your program will use standard input (like the regular cowsay) to get its phrase. Here are a couple of hints that will help you complete this:

You will have to run this javascript file using node. In your command line, this would look like:
```bash
node real-cowsay.js "hello world"
```
 or
```
fortune | figlet | node real-cowsay.js
```

You will need to use the special variable `process.argv` inside your JavaScript program. NodeJS make this variable available to you. It is an array containing all the command-line arguments passed to your program. For example, if you run:
```
node real-cowsay.js "hello world"
```
then `process.argv[0]` will be `"hello world"`.

For the standard input version, you will need to read about `process.stdin` as well as learn about asynchronous programming. These are things that will be viewed in week 2 of the course, but if you want to complete the challenge you need to do it :) Here is a link to some initial documentation:

https://nodejs.org/docs/latest-v0.12.x/api/process.html#process_process_stdin
