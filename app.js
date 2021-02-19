// 1.Write a JavaScript function to check if given string includes given symbol.
function checkSymbol(symbol, string) {
    if(string.includes(symbol)) console.log('String includes symbol.');
    else console.log('String doesn\'t include symbol.');
}

checkSymbol('t', 'text');


// 2.Write a JavaScript function to check whether a string is blank or not 
// (string with spaces should be also blank).
function checkBlank(string) {
    if(string == false || string.includes(' ')) console.log('Blank.');
    else console.log('Not blank.');
}

checkBlank('    ');


// 3.Write a JavaScript function to convert a string in abbreviated form. 
// console.log(abbrev (“Nazar Babii")) – should be “N.B.” (should convert lower case names to upper).
let firstLastName = 'Nazar Babii';
function abbrev(param) {
    let arr = param.split(' ');
    let result = [];
    result.push(arr[0][0], arr[1][0], '');
    return result.join('.').toUpperCase();
}

console.log(abbrev(firstLastName));


// 4.Write a JavaScript function that accept two integers and display the larger.
let int1 = 6;
let int2 = 7;

function compare2(param1, param2) {
    if(param1 > param2) console.log(param1);
    else if(param2 > param1) console.log(param2);
    else console.log('Integers are equal.');
}

compare2(int1, int2);


// 5.Write a JavaScript function with conditional statement to sort three numbers.
let num1 = 3;
let num2 = 1;
let num3 = 2;

function sort(p1, p2, p3) {
    let sorted = [];
    
    if (p1 >= p2 && p1 >= p3) {
        if (p2 >= p3) sorted.push(p3, p2, p1);
        else sorted.push(p2, p3, p1);
    } else if (p2 >= p1 && p2 >= p3) {
        if (p1 >= p3) sorted.push(p3, p1, p2);
        else sorted.push(p1, p3, p2);
    } else if (p1 >= p2) sorted.push(p2, p1, p3);
    else sorted.push(p1, p2, p3);

    console.log(sorted.join(', '));
}

sort(num1,num2,num3);