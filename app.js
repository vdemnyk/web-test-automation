// 1.Write a JavaScript function to get the last element of an array
function getLastEl(array) {
    if(array.length > 0) console.log(array[array.length - 1]);
    else console.log('Empty array');
}

getLastEl([1,2,3]);


// 2.Write a simple JavaScript program to join all elements of the following array into a string
function joinAll(array) {
    let str = '';
    for(let el of array) {
        str += el;
    }
    console.log(str);
}

joinAll([5,'car', 'bike', true]);


// 3.There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays and save them to third array
let small = [1,2,3,4,5];
let big = [11,12,13,14];

function sumArrays(arr1, arr2) {
    let sum1 = 0;
    let sum2 = 0;
    let result = [];
    for(let el of arr1) sum1 += el;
    for(let el of arr2) sum2 += el;
    result.push(sum1, sum2);
    console.log(result);
}

sumArrays(small, big);


// 4.Write a JavaScript program to calculate the area and perimeter of a rectangle. Rectangle should be an object with properties width and height and methods getArea() and getPerimeter();
let rectangle = {
    width: 3,
    height: 5,
    getArea: function() {
        console.log(this.width * this.height);
    },
    getPerimeter: function() {
        console.log(2 * (this.width + this.height));
    }
}

rectangle.getArea();
rectangle.getPerimeter();


