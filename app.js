// task 1
let a = 1;
let b = 2;

function sum(param1, param2){
    console.log(param1 + param2);
}

sum(a, b);


// task 2
let string = 'My string';

function newString(str) {
    console.log('Test_' + str);
}

newString(string);


// task 3
let firstName = 'Viktoriia';
let lastName = 'Demnyk';
let age = 24;

function myData(param1, param2, param3) {
    console.log(`${param1} ${param2} ${param3}`);
}

myData(firstName, lastName, age);


// task 4
let c = 101;

function check(int){
    console.log('Is number bigger than 100?', int > 100)
}

check(c);


// task 5
let d = 19;

function compare(param){
    console.log('Is number larger from 18 and 21?', param > 18 && param > 21);
}

compare(d);


// task 6
let e = 1;
let f = 49;

function compare50(param1, param2){
    return param1 === 50 || param2 === 50 || param1 + param2 === 50;
}

console.log('Is one of the number equal to 50 or their sum equal to 50?', compare50(e, f));


// task 7
let g = 21;

function multiple(param) {
    if (param % 3 === 0 && param % 7 === 0) console.log('Number is multiple of 3 and 7.');
    else if (param % 3 === 0) console.log('Number is a multiple of 3.');
    else if (param % 7 === 0) console.log('Number is a multiple of 7.');
    else console.log('Number is not multiple of 3 or 7.')
}

multiple(g);