// strings
console.log('hello, world');

let email = 'cooldaniel@email.com';
console.log(email);

// string concatenation
let firstName = 'Daniel';
let lastName = 'Cool';
let fullName = firstName + ' ' + lastName;
console.log(fullName);

// getting single characters
console.log(fullName[0]);

// string length
console.log(fullName.length);

// string methods
console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log(result, fullName);

let index = email.indexOf('@');
console.log(index);

// common string methods

let resultIndexOf = email.indexOf('n');
console.log(resultIndexOf);

let resultSlice = email.slice(4, 10);
console.log(resultSlice);

let resultSubstr = email.substr(4, 10);
console.log(resultSubstr);

let resultReplace = email.replace('m', 'w');
console.log(resultReplace);