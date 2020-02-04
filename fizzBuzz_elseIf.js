/*
FIZZBUZZ WHITEBOARDING CHALLENGE (pair coding)
************
    - create a variable named FB that gets initialized with a number
    - write a conditional that:
        - prints out "Fizz" if the number is divisible by 3
        - prints out "Buzz" if the number is divisible by 5
        - prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
*/

// ELSE IF
let FB = 9;

if (FB % 15 == 0) {
    console.log('Fizz buzz');
} else if (FB % 5 == 0) {
    console.log('buzz');
} else if (FB % 3 == 0) {
    console.log('fizz');
} else {
    console.log(FB);
}

// SWITCH
let FB = 5;

switch(true) {
    case (FB % 15 == 0 && FB % 3 == 0):
        console.log('Fizz buzz');
        break;

    case (FB % 5 == 0):
        console.log('Buzz');
        break;

    case (FB % 3 == 0):
        console.log('Fizz');
        break;
    default:
        console.log(FB);
}

// TERNARY
let FB = 30;

(FB % 15 == 0) ? console.log('Fizz buzz') //Ternary always requires a default
    : (FB % 5 == 0) ? console.log('Buzz')
    : (FB % 3 == 0) ? console.log('Fizz')
    : console.log(FB)