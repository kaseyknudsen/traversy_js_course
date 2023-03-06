let x;
let d = new Date();
console.log(d);
//2023-03-06T17:23:32.604Z

x = d.getFullYear();
console.log(`get full year: ${x}`);
//get full year: 2023

x = d.getMonth();
console.log(`get month: ${x + 1}`); //months are zero indexed
//get month: 3

x = d.getDate();
console.log(`get day of the month: ${x}`);
//get day of the month: 6

x = d.getDay();
console.log(`get day of the week: ${x}`);
//monday would be //get day of the week: 1

x = d.getHours();
console.log(`get hours: ${x}`);
//9:30 am would be //get hours: 9

x = d.getMinutes();
console.log(`get minutes: ${x}`);
//9:31 am would be //get minutes: 31

x = d.getSeconds();
console.log(`get seconds: ${x}`);
//9:31:22  would be //get seconds: 22

x = d.getMilliseconds();
console.log(`get Milliseconds: ${x}`);
//get Milliseconds: 433

x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
console.log(`full date: ${x}`);
//full date: 2023-3-6

//API intl.dateTimeFormat
//it's a powerful way to format dates in a locale sensitive way

x = Intl.DateTimeFormat("en-US").format(d);
console.log(`intl format: ${x}`);
//intl format: 3/6/2023

x = Intl.DateTimeFormat("en-GB").format(d); //UK
console.log(`intl format in the UK: ${x}`);
//intl format in the UK: 06/03/2023

x = Intl.DateTimeFormat("default").format(d);
console.log(`default format: ${x}`);
//default format: 3/6/2023

x = Intl.DateTimeFormat("default", { month: "long" }).format(d);
console.log(`default with options: ${x}`);
//default with options: March

//toLocaleString is a much quicker and simpler way that Intl

x = d.toLocaleDateString();
console.log(`to locale date string: ${x}`);
//to locale date string: 3/6/2023

x = d.toLocaleString();
console.log(`to localeString: ${x}`);
//to localeString: 3/6/2023, 9:54:57 AM

x = d.toLocaleString("default", { month: "short" });
console.log(`to localeString with options: ${x}`);
//to localeString with options: Mar

x = d.toLocaleString("default", {
  weekday: "long",
  year: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  timeZone: "America/Los_Angeles",
});
console.log(`toLocaleString with many options: ${x}`)
//toLocaleString with many options: 2023 Monday, 9:59:10 AM