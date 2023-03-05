let d;

d = new Date();
console.log(d);

d.toString();
console.log(d);

//month is zero based
let x = new Date(2023, 2, 5);
console.log(x);

x = new Date(2023, 0, 10, 12, 30, 0);
console.log(x);

//when using strings, month isn't zero-based
x = new Date("2023-07-10");
console.log(x);

x = new Date("2023-07-10T12:30:00");
console.log(x);

//when using dashes and putting the year first, it could be off by a day because of time zones
d = new Date("2022-07-10");
console.log(d);

//it will be accurate if the month is listed first
d = new Date("07-10-2023");
console.log(d);

/*timestamps tell you the number of seconds that have elapsed since january 1
1970 in milliseconds. */

d = Date.now();
console.log(d);

//this gets you the num of milliseconds since a particular time
d = new Date("07-10-2022 12:30:00");
d = d.getTime();
console.log(d);

d = d.valueOf();
console.log(d);

d = new Date(1657481400000);
console.log(d);

//to get the time in seconds, divide by 1000
x = Math.floor(Date.now() / 1000);
console.log(x);
