// console.log('1 step'); 
// console.log('2 step'); 

// setTimeout(() => { 
//     console.log('3 step'); 
// }, 3000) 

// console.log('4 step'); 


// console.log('1 step'); 
// console.log('2 step'); 

// new Promise((resolve, reject) => setTimeout(() => {
//     console.log('3 step');
//     resolve(); 
// }, 3000)).then(() => {
//     console.log('4 step')
// });

Promise.all([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(2), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
]).then((result) => {
    console.log(result[0]);
    console.log(result[1]);
    console.log(result[2]);
});

// function login(email, pass) {
//     emailInput.sendKeys(email).then(() => {
//         passwordInput.sendKeys(pass).then(() => {
//             loginButton.click();
//         });
//     }); 
// }

// async function login(email, pass) {
//     await emailInput.sendKeys(email);
//     await passwordInput.sendKeys(pass);
//     await loginButton.click();
// }