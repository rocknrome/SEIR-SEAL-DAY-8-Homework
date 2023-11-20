# SEIR-SEAL-DAY-8-Homework
Combining Datatypes &amp; Callbacks
General Assembly Logo
Title: Combining data types/Callbacks
Type: Homework
Duration: 4hr
Creator: Matt Huntington
Adapted by: Thom Page, Karolin Rafalski
Competencies: Objects, Arrays, Loops
Prerequisites: JavaScript

Combining Datatypes & Callbacks
This homework is designed to be a review of all the material covered the last few class days, to help solidify these fundamentals.

Learning Objectives
Learn common programming principals
Practice commenting code
Practice renaming variables to be more semantic
Practice reading errors
Practice combining datatypes one level deep
Practice combining datatypes more than one level deep
Practice using array methods with callbacks
Prerequisites
JavaScript fundamentals
Javascript basics of Arrays, Objects and Functions
Introduction to callbacks
Getting Started
Touch a file for each section - there are three sections - programming_fundamentals , combining_datatypes and arrays_w_callbacks
Deliverables
Three files answering the questions in each section

Technical Requirements
JavaScript files must run without errors (comment out things that don't work and leave a comment for the hw grader)
Submission Guidelines
Must be submitted before next start of class
Section 1: Programming Fundamentals
Create a file called programming_fundamentals.js inside your homework folder for today.
Copy the questions that you are answering into your file (and comment it out) and write the answer below the question.
Common programming principles
As you are starting out, there may be things you are really worried about and other big gotchas that you aren't yet aware that are gotchas!

Read this article on programming principles, focus on the following nine:

DRY
KISS
Avoid creating a YAGNI
Do the simplest thing that could possibly work
Don't make me think
Write code for the maintainer
Single responsibility principle
Avoid premature optimization
Separation of concerns
Answer

Write a ~1 sentence summary for each one
Which ones surprise you (if any)?
Which one is currently giving you the most struggle?
Commenting Code
Comment each line of this code and describe what it is doing. Feel free to run this code and add console.logs to help you figure it out:

const f = l => {
  let es = 0, p = 0, c = 1, n = 0
  while (c <= l) {
    n = c + p;
    [c, p] = [n, c]
    es += (c % 2 === 0) ? c : 0
  }
  return es
}

console.log(f(55))
At first we may strive for the shortest code possible. But we really should be striving for readable code that is easy to maintain. Compare the same solution with more semantic variable names (feel free to use this one to help you figure out what is happening in this function:

const f2 = (limit) => {
  let evenSum = 0;
  let previous = 0;
  let current = 1;
  while (current <= limit) {
    let next = current + previous;
    previous = current;
    current = next;
    if (current % 2 === 0) {
      evenSum += current;
    }
  }
  return evenSum;
}


console.log(f2(55))
Answer with comments:

In keeping with one of our programming principals (write code for the maintainer): What would have been a more semantic name for this function (hint: this is a problem we had for either lab or hw and is considered a classic ) - are there any other variable names or things that would make this code easier to read and understand?

If you started a new job and your project was to expand the functionality of this function by allowing a second argument and then based on that second argument, returning the sum of even or odd numbers, which code would you rather start working with f or f2?

Finally, the 'shorter' code style doesn't use semi-colons, except for the fourth line. Remove this semi-colon! Run the code, is this semi-colon necessary?

Section 2 Combining Datatypes
Combine objects, arrays, and functions
touch combining_datatypes.js and do your work for this section in this new file
Create an object, called crayonBox, that has a property that is an array. The array should have the names of some crayons. Log one of the elements of that array.

Create an object bottle that has a property that is an object: cap. cap can have properties like material: 'metal' or 'plastic', color: blue or white etc. Log one of the properties of that inner object.

Create an array called receipt that has at least one object in it. The inner objects should be items that have a name and a price. Log one of the properties of that inner object.

Create an array called apartmentBuilding that has an array as one of its elements, the inner array should be the names of the tenants. Log one of the elements of the inner array.

🔴 Commit:
"Combine objects, arrays, and functions"
Combine objects, arrays, and functions more than one level deep
Create a function knit that returns an object that has the following kinds of properties item: scarf, size : 6ft etc. Log a value of that object (hint: call the function and then call a property on the return value).
Create a function crayonSelector that returns an object that has an array (you can reuse your crayonBox object). Log one of the elements of that array.
Create a function powerButton that returns a function called options - options should console.log a simple message like select a song. Call that inner function
🔴 Commit:
"Combine objects, arrays, and functions more than one level deep"
Model a Vending Machine Model a vending machine

a vending machine is an object
it has an array of snacks (make 3 snacks)
snacks are objects that have a name and a price
a vending machine has a function vend that allows user to enter the array position (a number) of the snack and then that snack will be returned
Be able to call vendingMachine.vend() with a valid integer to return a snack
Callbacks
Make a function add that takes two arguments (numbers) and sums them together
Make a function subtract that takes two arguments (numbers) and subtracts them
Make a function multiply that takes two arguments and multiplies them
Make a function divide that takes two arguments and divides them
Make a function calculate that takes three arguments. Assume the two arguments are a number ie num1, num2 and a function called operates (a callback).
Make it so that when calculate is invoked, the callback "operates" on the numbers and returns the value.
Call calculate 4 times, each time using one of the operation functions you wrote
Function definition placement
Clean up this code, so that it works and has function definitions in the correct place

bar();
const bar = () => {
    console.log('bar here');
}
foo();

const foo = () => {
    console.log('foo here');
}
Error reading
What is meant by the error(s) this produces?

foo();

const foo ()=>{
    console.log('hi');
}
Section 3 Array Methods with Callbacks
A few array methods use callbacks. For example .map - .map takes each element of an array and does something to it and returns a new arrays.

But what should it do? Multiply everything by 5? Capitalize everything? If .map had a hard-coded thing it always did with an array, it wouldn't be very flexible.

By allowing a callback to determine what happens to each array element we get a lot of flexibility and we can do some really powerful things.

Two arrays to work with

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']
The first question is for the numbers array. The second question is for the words array.

You don't have to write an answer to the thought questions.

Every
Determine if every number is greater than or equal to 0
determine if every word shorter than 8 characters
Filter
filter the array for numbers less than 4
filter words that have an even length
Find
Find the first value divisible by 5
find the first word that is longer than 5 characters
Find Index
find the index of the first number that is divisible by 3
find the index of the first word that is less than 2 characters long
For Each
console.log each value of the nums array multiplied by 3
console.log each word with an exclamation point at the end of it
Thought Questions

What happened to the original array?
Can you store the values from a forEach method in a new array?
Map
make a new array of each number multiplied by 100
make a new array of all the words in all uppercase
Thought Questions

What happened to the original array?
Can you store the values from a map method in a new array?
Some
Find out if some numbers are divisible by 7
Find out if some words have the letter a in them
