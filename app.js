const randomstring = require("randomstring");
const fs = require('fs');

// Create a variable student and set ‘name’, ‘surname’ and ‘rate’. 
// Name and surname generate using randomstring. Rate generate using Math, in range 1-100.
let student = {
    name: randomstring.generate({
        length: 5,
        charset: 'alphabetic'
    }),
    surname: randomstring.generate({
        length: 10,
        charset: 'alphabetic'
    }),
    rate: Math.floor((Math.random() * 100) + 1)
}

// Use JSON.stringify() method to make a JSON string and write it into file (not existed), rewrite file if existed.
// Read this string from file and convert to object.
// Make some change to object and append is as new line to existed file. Write changes into the same file.
fs.writeFile('student.txt', JSON.stringify(student), function(err) {
    if(err) throw err;
    fs.readFile('student.txt', function(err, data) {
        let obj = JSON.parse(data);
        obj.age = 18;
        fs.appendFile('student.txt', JSON.stringify(obj), function(err) {
            if(err) throw err;
        });
    });
});
