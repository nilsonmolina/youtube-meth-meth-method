// // -------------- TYPICAL CALL STACK -----------------
// function step1() {
//     step2();
// }
// function step2() {
//     step3();
// }
// function step3() {
//     step4();
// }
// function step4() {
//     debugger;
// }

// step1();

// // -------------- ORDER OF CALLS EXAMPLE 1 -----------------
// function sync() {
//     console.log('sync');
// }

// function deferred() {
//     console.log('deferred');
// }

// sync();
// deferred();

// // -------------- ORDER OF CALLS EXAMPLE 2 -----------------
// function sync() {
//     deferred();
//     console.log('sync');
// }

// function deferred() {
//     console.log('deferred');
// }

// sync();

// // -------------- ORDER OF CALLS EXAMPLE 3 -----------------
// function sync() {
//     setTimeout(deferred, 0);
//     console.log('sync');
// }

// function deferred() {
//     console.log('deferred');
// }

// sync();

// // -------------- ORDER OF CALLS EXAMPLE 3 -----------------
// function sync(callback) {
//     setTimeout(function() {
//         const res = deferred();
//         callback(res);
//     }, 1000);
// }

// function deferred() {
//     return 'deferred';
// }

// sync(function(result) {
//     console.log(result);
// });

// // -------------- SALARY EXAMPLE -----------------
// function getSalary() {
//     return 33000;
// }

// function subtractTax(salary) {
//     return salary * 0.75;
// }

// function subtractRent(salary) {
//     return salary - 5000;
// }

// function getDisposableIncome() {
//     let salary = getSalary();
//     salary = subtractTax(salary);
//     salary = subtractRent(salary);
//     return salary;
// }

// console.log(getDisposableIncome());

// // -------------- SALARY EXAMPLE - W/ A SINGLE CALLBACK -----------------
// function getSalary(callback) {
//     setTimeout(() => {
//         callback(33000);
//     }, 1000);
// }

// function subtractTax(salary) {
//     return salary * 0.75;
// }

// function subtractRent(salary) {
//     return salary - 5000;
// }

// function getDisposableIncome(callback) {
//     getSalary(salary => {
//         salary = subtractTax(salary);
//         salary = subtractRent(salary);
//         callback(salary);
//     });
// }

// getDisposableIncome(salary => {
//     console.log(salary);
// });

// // -------------- SALARY EXAMPLE - W/ MULTIPLE CALLBACKS -----------------
// function getSalary(callback) {
//     setTimeout(() => {
//         callback(33000);
//     }, 1000);
// }

// function subtractTax(salary, callback) {
//     setTimeout(() => {
//         callback(salary * 0.75);
//     }, 1000);
// }

// function subtractRent(salary, callback) {
//     setTimeout(() => {
//         callback(salary - 5000);
//     }, 1000);
// }

// function getDisposableIncome(callback) {
//     getSalary(salary_1 => {
//         subtractTax(salary_1, salary_2 => {
//             subtractRent(salary_2, salary_3 => {
//                 callback(salary_3);
//             });
//         });        
//     });
// }

// getDisposableIncome(disposable => {
//     console.log(disposable);
// });

// // -------------- REFACTOR WITH PROMISES -----------------
// function getSalary() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(33000);
//         }, 1000);
//     });
// }

// function subtractTax(salary) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(salary * 0.75);
//         }, 1000);
//     });    
// }

// function subtractRent(salary) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(salary - 5000);
//         }, 1000);
//     });
// }

// function getDisposableIncome() {
//     return getSalary().then(subtractTax).then(subtractRent);
// }

// getDisposableIncome().then(disposable => {
//     console.log(disposable);
// })

// // -------------- A GREAT BENEFIT SHOWN ON THE GETSALARYSUM() ONLY RUNS ONCE, NOT MULTIPLE TIMES -----------------
// function getSalary(salary) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(salary);
//         }, 1000);
//     });
// }

// function getSalarySum() {
//     return Promise.all([
//         getSalary(10000),
//         getSalary(20000),
//         getSalary(40000),
//         getSalary(80000),
//         getSalary(160000),
//         getSalary(320000),
//     ]).then(salaries => {
//         return salaries.reduce((prev, cur) => prev + cur, 0);
//     });
// }

// function subtractTax(salary) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(salary * 0.75);
//         }, 200);
//     });    
// }

// function subtractRent(salary) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(salary - 5000);
//         }, 200);
//     });
// }

// function getDisposableIncome() {
//     return getSalarySum().then(subtractTax).then(subtractRent);
// }

// getDisposableIncome().then(disposable => {
//     console.log(disposable);
// })

// // -------------- PROJECT W/ SPOTIFY API -----------------
// UNFORTUNATELY, SPOTIFY AUTHENTICATION WAS ADDED AFTER VIDEO, SO I DID THIS TO MAKE IT WORK.
// let url = 'https://api.spotify.com/v1/search?q=michael+jackson&type=album'
// let accessToken = '';
// let header = new Headers().append('Authorization', 'Bearer ' + accessToken)

// fetch(url, {headers: header})
//     .then(response => {
//         console.log(response);
//     });

let authenticateUrl = 'https://accounts.spotify.com/authorize?client_id=5fe01282e94241328a84e7c5cc169164&redirect_uri=file:///C:/Users/W10-Dev/Desktop/files/dev/projects/youtube-pong/promises/index.html&response_type=token'

