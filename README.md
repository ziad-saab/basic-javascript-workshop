# Intro to JavaScript workshop!

## Instructions

* Fork this repo to your own GitHub, and clone your copy to Cloud9
* Move to the directory you cloned and run `npm install` from the command line
* For every exercise:
  1. From the command line, run:
  
  ```sh
  npm test test/<nameOfTheExercise>.js
  ```
  
  For example, for the first exercise:
  
  ```sh
  npm test test/firstLetter.js
  ```
  2. Look at the failing test results
  3. In `workshop.js`, fill in the function code and re-run the tests
  4. Continue doing this until all the tests have passed. Then move to the next exercise.
  
* **NOTE**: To make things more interesting, **there are TWO errors in the unit tests themselves!** If some tests are failing but you think you have a good solution, make sure to look at the code of the tests ;)
  
## Functions

### `firstLetter`
Make this function return the first letter of the string that is passed to it. If the function receives no parameter or an invalid parameter, it should return `undefined`.

### `lastLetter`
Make this function return the last letter of the string that is passed to it. If the function receives no parameter or an invalid parameter, it should return `undefined`.

### `letterAtPosition`
Make this function return the letter at the specified position in the string. If the function receives no parameter or invalid parameters, it should return `undefined`. For example:

```js
letterAtPosition("hello", 2); // l
letterAtPosition("", 4); // undefined
letterAtPosition("abc", 0); // a
```

### `addTwoNumbers`
Make this function return the sum of the two numbers that are passed to it. If one of the numbers is not passed, or if anything other than numbers are passed, return `undefined`.

### `multiplyTwoNumbers`
Make this function return the product of the two numbers that are passed to it. If one of the numbers is not passed, or if anything other than numbers are passed, return `undefined`.

### `calculator`
Use the `operation` argument to decide what this function will return. If it's "add", return the sum of the two numbers. "sub" return their difference. "mult" return their product. "div" return their ratio. Anything else return `undefined`. For example:

```js
calculator("add", 10, 20); // 30
calculator("div", 1, 1); // 1
calculator("spoof", 10, 10); // undefined
```

### `repeatString`
Make this function return the input string repeated as many times as specified. If a negative number or zero is specified, return an empty string. If any invalid parameters are supplied return `undefined`.

### `reverseString`
Make this function return the input string, reversed. For example "hello" would return "olleh" and "how are you" would return "uoy era woh".

### `longestWord`
Make this function return the longest word in the input string. If the input string is empty then return an empty string. If multiple words have the same length, return the last one that matches.

### `capitalize`
Make this function return the input string, capitalized. For example:
 
```js
capitalize("hello world"); // Hello World
capitalize("ALL YOUR BASE ARE BELONG"); // All Your Base Are Belong
````

### `sumOfNumbers`
Make this function return the sum of all the numbers in the input array. If any element in the array is not a number, skip it. If the array is empty, return zero.

### `uniqueElements`
Make this function return the elements that are unique to `array1` and `array2`. If there are no unique elements return an empty array. If the inputs are anything other than arrays, return `undefined`. For example:
 
 ```js
uniqueElements([0,1,2,3], [1,3,4,5]); // [0,4,5]
uniqueElements([1,2,3], [1,2,3]); // []
uniqueElements(2,3); // undefined, not arrays
 ````

### `isPalindrome`
Make this function return `true` if the input string is a palindrome, and `false` otherwise. A palindrome is simply a string that is the same if you reverse it.

**NOTE**: To make *ALL* the tests pass, you will need to strip all characters that are not letters from the input string. Here are some examples:

```
RADAR -> Yes
JAVASCRIPT -> No
ABLE WAS I ERE I SAW ELBA -> Yes, even with spaces
MADAM I'M ADAM -> No strictly speaking, but *should* pass if you remove non-letters
```

### `wrapCharacter`
Make this function return the input string wrapped to 40 characters per line. This means you'll have to insert a newline `\n` character after every 40 characters in the input string. If the next character after a cut is a space, then do not display it. For example with the input:

```
Lorem ipsumos dolor sit amet consectetur adipisicing elit. Magni quisquam
```

the output would be:

```
Lorem ipsumos dolor sit amet consectetur
adipisicing elit. Magni quisquam
```

instead of:

```
Lorem ipsumos dolor sit amet consectetur
 adipisicing elit. Magni quisquam
```

even though there is a space before the `a` in `adipisicing`

### `wrapWord`
Make this function return the input string wrapped to 40 characters max per line, but break the line by word. If a word is longer than 40 characters, put it on its own line no matter how long it is, and move on to the next line. For example:

```
this string contains a wordthatislargerthanfourtycharactersfortesting purposes
```

should become:

```
this string contains a
wordthatislargerthanfourtycharactersfortesting
purposes
```

### `bubbleSort`
Make this function implement the "Bubble Sort" algorithm for sorting an array of numbers as input. Your function should sort the numbers in the input array. Here is the algorithm:

1. Loop through all the elements in the array from left to right. For each element:
  a. Compare it to the one right next to it.
  b. If the current number is larger than the one next to it, then they are clearly not in the right order. Swap the two numbers.
  c. Otherwise, do nothing.
2. Once the loop is over, make a simple decision:
  a. If you swapped any numbers during the loop, then you need to loop again. Go back to step #1
  b. If you did not swap any numbers during the loop, then the array is in order. You can return it.
  
We call this algorithm bubble sort because the large numbers bubble through to the end of the array as we complete loops of the main logic.

Here's an example run:

```
[5 1 4 2 8] // The input array
[1 5] 4 2 8 // Swapped 1 and 5
1 [4 5] 2 8 // Swapped 4 and 5
1 4 [2 5] 8 // Swapped 2 and 5
1 4 2 [5 8] // Didn't swap 5 and 8 as they are correct
// Finished the first pass. Since we swapped numbers, start again
[1 4] 2 5 8 // Didn't swap 1 and 5 as they are correct
1 [2 4] 5 8 // Swapped 2 and 4
1 2 [4 5] 8 // Didn't swap 4 and 5 as they are correct
1 2 4 [5 8] Didn't swap 5 and 8 as they are correct
// Finished second pass. Even though array is sorted, algorithm says to do one more pass
[1 2] 4 5 8
1 [2 4] 5 8
1 2 [4 5] 8
1 2 4 [5 8]
// Didn't swap any numbers, algorithm is over and array is sorted!
```