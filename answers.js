// ==========================================================================
// DecodeMTL instructors solutions - Workshop 1
// ==========================================================================


// 1) Write a function that takes a string and returns the first character of
// the string. Test your function on a few inputs, including the empty string.
function getFirstChar(str) {
  return str.substr(0,1);
}
console.log(getFirstChar("Nathaniel"));


// 2) Write a function that takes a string and returns the last character of a
// string. Test your function on a few inputs, including the empty string.
function getLastChar(str) {
  return str.substr(str.length-1, 1);
}
console.log(getLastChar("Kitzke"));


// 3) Write a function that takes a string and a number, and returns the
// character at the position represented by the number. The indexing of number
// should start at 0. Test your function on a few inputs, including the empty
// string.
function getCharAt(str, pos) {
  return str.substr(pos, 1);
}
console.log(getCharAt("Penelope", 6));


// 4) Write a function that takes two numbers and adds them together. Test your
// function on a few inputs. Write in the comments what happens when you pass
// something other than a number to your function.
function add(x, y) {
  return x + y;
}
console.log(add(4, 7));


// 5) Write a function that takes two numbers and multiplies them together. Test
// your function on a few inputs. Write in your comments what happens when you
// pass something other than a number to your function.
function multiply(x, y) {
  return x * y;
}
console.log(multiply(3, 5));


// 6) Write a function that takes two numbers and a string. If the string is
// ‘add’, then return the sum of the numbers. If the string is ‘subtract’,
// return the difference. If the string is ‘mult’, return the product. If the
// string is ‘div’, return the ratio. Otherwise return 0.
function operate(x, y, str) {
  if (str === 'add') {
    return x + y;
  }
  else if (str === 'sub') {
    return x - y;
  }
  else if (str === 'mult') {
    return x * y;
  }
  else if (str === 'div') {
    return x / y;
  }
  else {
    return "incorrect operand passed, please use either add, sub, mult or div";
  }
}
console.log(operate(14, 2, 'div'), operate(14, 2, 'mult'), operate(14, 2, 'sub'));


// 7) Write a function that takes a string and a number, and returns the string
// repeated that many number of times. Test your function with various inputs.
function repeatString(str, num) {
  let answer = "";
  while(num > 0) {
    answer += str;
    num--;
  }
  return answer;
}
console.log(repeatString("Hello", 5));


// 8) Write a function that takes a string, and returns the reverse of that
// string. For example, if you pass the function the string “hello”, it should
// return “olleh”.
function reverseString(str) {
  // convert str to array, reverse, join back to single string.
  return str.split("").reverse().join("");
}
console.log(reverseString("Helicopter"));


// 9) Write a function that takes a number and returns the factorial of a number.
// The factorial of 5 is 5x4x3x2x1. The factorial of 0 is 1. Test your input on
// a few numbers, including negative numbers.
function factorial(num) {
  var number = Math.abs(num);
  var answer = Math.abs(num);
  while (number > 1) {
    number --;
    answer = answer * (number);
  }
  return Math.sign(num) * answer;
}
console.log(factorial(-8), factorial(5));


// 10) Write a function that takes a phrase as a string, and returns the longest
// word in that phrase. If the phrase contains more than one such word, return
// the first occurrence. Test your function on a few inputs.
function longuestWord(phrase) {
  var wordsArray = phrase.split(" ");
  wordsArray.sort(function(a, b) {
    return b.length - a.length;
  })
  return wordsArray[0];
}
console.log(longuestWord("Hi, I'm all out of hamburgers since yesterday"));


// 11) Write a function that takes a phrase, and returns the same phrase with
// every word capitalized. For example, if you pass your function "hello world",
// it should return "Hello World" and if you pass it "HELLO WORLD" or even
// "HeLLo WoRLD", it will also return "Hello World".
function capitalize(phrase) {
  var wordsArray = phrase.split(" ");
  var wordsArrayCapitalized = wordsArray.map(function(word) {
    var lowerCaseWord = word.toLowerCase()
    return lowerCaseWord[0].toUpperCase() + lowerCaseWord.substr(1);
  });
  return wordsArrayCapitalized.join(" ");
}
console.log(capitalize("everYboDy Likes IT WHen wE sInG!"));


// 12) Write a function that takes an array and returns the largest number of
// the array. Test your function on a few inputs.
function largestNumber(numArray) {
  sortedNumArray = numArray.sort(function(x, y) {
    return y - x;
  })
  return sortedNumArray[0];
}
console.log(largestNumber([8,3,4,1,11,9,7]));


// 13) Write a function that takes an array, and returns a filtered array. The
// filtered array should only contain the truthy values from the initial array.
// Hint: there is an array method called filter that can help you with this :)
function onlyTruthy(arrayOfStatements) {
  return arrayOfStatements.filter(function(s) {
    return s;
  })
}
console.log(onlyTruthy([undefined, null, 2, 0, "", "dirt", {}, ['a', 3], true, false]));


// 14) Write a function that takes an array of numbers, and returns the sum of
// all the numbers in the array.
function sumOfNumbersArray(numArray) {
  return numArray.reduce(function(a, b) {
    return a + b;
  })
}
console.log(sumOfNumbersArray([3,2,5,12,4,18]));


// 15) Write a function that takes two arrays, and returns an array of all
// elements that are only in one array. For example, with [1,2,3] and [1,2,4,5]
// the function should return [3,4,5]. Test your function on different inputs.
// Hint: you should look up array methods indexOf and slice.
function uniqueElementsOnly(arr1, arr2) {
  var arr3 = arr1.filter(function(ele) { return arr2.indexOf(ele) == -1; });
  var arr4 = arr2.filter(function(ele) { return arr1.indexOf(ele) == -1; });
  return arr3.concat(arr4);
}
console.log(uniqueElementsOnly([3, 'dogs', 8, 0, 22, 44], [8, 'dogs', 'cats', 3, 11, 22]));



// Mini Challenge: write a function that takes an array and a function as
// arguments. The function should return a new array that maps every element of
// the input array by passing it through the function you received. You are not
// allowed to use Array.map for this challenge, otherwise it would be too easy :)
function explicitMap(array, func) {
  var newArray = [];
  for (var i=0; i < array.length; i++) {
    newArray.push(func(array[i]));
  }
  return newArray;
}
console.log(explicitMap([3,4,5,8,11], function(ele){ return ele*ele; }))
