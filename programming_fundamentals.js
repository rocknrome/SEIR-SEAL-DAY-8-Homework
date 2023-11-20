//   R'N'R   November 20, 2023



////////////////////////////////
//1. Programming fundamentals
/*Write a ~1 sentence summary for each one
Which ones surprise you (if any)?
Which one is currently giving you the most struggle?
Commenting Code
Comment each line of this code and describe what it is doing. 
Feel free to run this code and add console.logs to help you figure it out:*/

const f = l => {                    //declaring a variable f that is a function
  let es = 0, p = 0, c = 1, n = 0   //declaring local-scope variables inside of this function. setting some as 0.
  while (c <= l) {                  //setting up a condition for the algorythm, while c <=1
    n = c + p;                      //re-declaring the variable n as a sum of other 2 variables.
                                    //looks like a Fibonacci scenario
    [c, p] = [n, c]                 //replacing values c,p with n,c
    es += (c % 2 === 0) ? c : 0     //checking if c is an even number and adding it to es
  }                                 //adds 0 if odd number
  return es                         //returning es
}                                   //looks like es is a sum of even numbers
console.log(f(55))                  //printing the value of function f with argument 55


/*At first we may strive for the shortest code possible. But we really should be striving for readable 
code that is easy to maintain. Compare the same solution with more semantic variable names 
(feel free to use this one to help you figure out what is happening in this function:*/

const f2 = (limit) => {             //I  did try to figure it out myself without looking into algorythm below. 
  let evenSum = 0;                  //the provided algorythm helped a lot in understanding the logic
  let previous = 0;                 //the code takes in sum, previous, current and new parameters
  let current = 1;                  //starting with 1, the while loop goes thru the Fibonacci scenario
  while (current <= limit) {        //comparing the current value with the argument passed to the function
    let next = current + previous;  //calculates next value as current and previous. 
    previous = current;             //re-declaring previous with current
    current = next;                 //re-declaring current value with next
    if (current % 2 === 0) {        //checking if the current vaalue is even
      evenSum += current;           //adding that value to our sum
    }
  }
  return evenSum;                   //sum of even numbers that are less than passed argument
}
console.log(f2(55))                 //printing out the final result of function's calculatio with a passed argument 55



/*Answer with comments:

In keeping with one of our programming principals (write code for the maintainer): 
What would have been a more semantic name for this function (hint: this is a problem we had 
for either lab or hw and is considered a classic ) - are there any other variable names or 
things that would make this code easier to read and understand?
//   The more appropriate name for this function would be: evenNumbersSum or fibonacciEvenNumbersSum or sumOf EvenFibonacciNumbers. 
//   It would be nice to name variables in such a way that would be readable and easier understood by other people looking into code:
//   Like: prevNum, curNum, newNum


If you started a new job and your project was to expand the functionality of this function by 
allowing a second argument and then based on that second argument, returning the sum of even or odd numbers, 
which code would you rather start working with f or f2?
//   The answer is obvious, it would be f2 since it is easier to read and understand

Finally, the 'shorter' code style doesn't use semi-colons, except for the fourth line. 
Remove this semi-colon! Run the code, is this semi-colon necessary?*/
//   That semi-colon n = c + p; is necessary, the terminal gives an error "SyntaxError: Invalid left-hand side in assignment"
//   which is referring to the end of statement marking