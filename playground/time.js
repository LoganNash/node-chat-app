var moment = require('moment');

// var date = moment();
// console.log(date.format('MMM Do, YYYY'))

// console.log(date.format('h:mm a'));

var someTimeStamp = moment().valueOf();
console.log(new Date().getTime());

var createdAt = 1234;
var date = moment(createdAt);
console.log(date.format('h:mm a'));


// var date = new Date();
// console.log(date.getMonth());