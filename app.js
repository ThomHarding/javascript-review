// These functions are tested by console logging - all the console log statements
// should print true.

// 1. convertToSeconds
// Write a function called convertToSeconds that takes
// a number of minutes as an argument and returns
// the number of seconds

function convertToSeconds(seconds) {
    return (seconds * 60);
}

console.log(`convertToSeconds(10) === 600 : ${convertToSeconds(10) === 600}`);

// 2. areaOfTriangle
// Write a function called areaOfTriangle that takes in the base and height
// of a triangle and returns its area
function areaOfTriangle(base, height) {
    return ((base * height) / 2);
}
console.log(`areaOfTriangle(5, 10) === 25 : ${areaOfTriangle(5, 10) === 25}`);

// 3. lessThan100
// Given 2 numbers, return true if their sum is less than 100
// return false if it is greater than 100
function lessThan100(numOne, numTwo) {
    return ((numOne + numTwo) < 100);
}
console.log(`lessThan100(5, 10) === true : ${lessThan100(5, 10) === true}`);
console.log(`lessThan100(100, 10) === false : ${lessThan100(100, 10) === false}`);

// 4. getFormattedName
// Write a function called getFormattedName
// that accepts a first_name and last_name as required parameters
// and a third parameter called middle_name which is optional.
// The function should return a string with the first, middle and last names
function getFormattedName(first_name, last_name, middle_name = '') {
    if (middle_name !== '') {
        return (first_name + ' ' + middle_name + ' ' + last_name);
    } else {
        return (first_name + ' ' + last_name);
    }
}
console.log(
    `getFormattedName('Ruth', 'Ginsburg') === 'Ruth Ginsburg': ${
        getFormattedName('Ruth', 'Ginsburg') === 'Ruth Ginsburg'
    }`
);
console.log(
    `getFormattedName('Ruth', 'Ginsburg', 'Bader') === 'Ruth Bader Ginsburg': ${
        getFormattedName('Ruth', 'Ginsburg', 'Bader') === 'Ruth Bader Ginsburg'
    }`
);

// 5. daysInMonth
// Write a function called daysInMonth that accepts a month as input
// (represented as a number between 1 and 12) and returns the number
// of days in that month. For now, assume there are always 29 days in Feb.
// Bonus 1: Check the value of the number passed into the function and
//    print a message to the user if the value is not between 1 and 12
// Bonus 2: Update the function to accept an optional parameter year
//    that checks if the year is a leap year, and returns the correct
//    number of days for Feb. The default value for the year should be
//    the current year
function daysInMonth(month, year = true) {
    if (year === false && month === 2) {
        return 28;
    } else {
        switch (month) {
            case 1: 
                return (31);
            case 2: 
                return (29);
            case 3: 
                return (31);
            case 4: 
                return (30);
            case 5: 
                return (31);
            case 6: 
                return (30);
            case 7: 
                return (31);
            case 8: 
                return (31);
            case 9: 
                return (30);
            case 10: 
                return (31);
            case 11: 
                return (30);
            case 12: 
                return (31);
            default: 
                return ('Please enter a valid number (Between 1 and 12)');
        }
    }
}
console.log(`daysInMonth(2) === 29: ${daysInMonth(2) === 29}`);
console.log(`daysInMonth(3) === 31: ${daysInMonth(3) === 31}`);
console.log(`daysInMonth(11) === 30: ${daysInMonth(11) === 30}`);

// Additional Practice
// - [Multiply](https://www.codewars.com/kata/50654ddff44f800200000004)
// - [Even or Odd](https://www.codewars.com/kata/53da3dbb4a5168369a0000fe)
// - [Student Grades](https://www.codewars.com/kata/5ad0d8356165e63c140014d4)
// - [Reversed Strings](https://www.codewars.com/kata/5168bb5dfe9a00b126000018)
// - [Is it a Palindrome?](https://www.codewars.com/kata/57a1fd2ce298a731b20006a4)
// - [Numerical Palindrome](https://www.codewars.com/kata/58ba6fece3614ba7c200017f)
// - [Disemvowel Trolls](https://www.codewars.com/kata/52fba66badcd10859f00097e)