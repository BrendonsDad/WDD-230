// day names array
const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

// Long month names array
const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
const todaysdate = new Date();
const dayNames = dayNames[todaysdate.getDate()]
const monthName = month[todaysdate.getMonth()];
const year = todaysdate.getFullYear;
const currentdate = dayNames + ", " + todaysdate.getDate() + " " + monthName + ", " + todaysdate.getFullYear();


document.getElementById('currentdate').textContent = currentdate;

const daysUntil = template`There are ${daycount} days until ${targetEvent}!`;

let t3Closure = template`I'm ${'name'}. I'm almost ${'age'} years old.`;




// const options = {weekday: 'long', day: 'numeric', month: 'long', year:'numeric'};
// document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-US', options);
