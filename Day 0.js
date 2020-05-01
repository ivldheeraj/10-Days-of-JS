1. HELLO WORLD!
Sample Input 
Welcome to 10 Days of JavaScript!

Sample Output 
Hello, World!
Welcome to 10 Days of JavaScript!


function greeting(parameterVariable) {
    // This line prints 'Hello, World!' to the console:
    console.log('Hello, World!');

    // Write a line of code that prints parameterVariable to stdout using console.log:
    console.log(parameterVariable);
}
------------------------------------------------------------------------------------------------------
2. DATATYPES
Sample Input 
12
4.32
is the best place to learn and practice coding!

Sample Output 
16
8.32
HackerRank is the best place to learn and practice coding!

function performOperation(secondInteger, secondDecimal, secondString) {
    
    const firstInteger = 4;
    
    const firstDecimal = 4.0;
    
    const firstString = 'HackerRank ';
    
  // Write code that uses console.log to print the sum of the 'firstInteger' and 'secondInteger' (converted to a Number type) on a new line.

    
   console.log(firstInteger + parseInt(secondInteger, 10));
    
    // Write code that uses console.log to print the sum of 'firstDecimal' and 'secondDecimal' (converted to a Number            type) on a new line.
    console.log(firstDecimal+ parseFloat(secondDecimal, 10));
    
    // Write code that uses console.log to print the concatenation of 'firstString' and 'secondString' on a new line. The        variable 'firstString' must be printed first.
    console.log(firstString.concat(secondString));
}
