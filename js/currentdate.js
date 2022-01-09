// // day names array
// const dayNames = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday"
// ];

// // Long month names array
// const month = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December"
// ];
// const todaysdate = new Date();
// const dayNames = dayNames[todaysdate.getDate()]
// const monthName = month[todaysdate.getMonth()];
// const year = todaysdate.getFullYear;
// const currentdate = dayNames + ", " + todaysdate.getDate() + " " + monthName + ", " + todaysdate.getFullYear();


// document.getElementById('currentdate').textContent = currentdate;




const lastmod = document.querySelector('#lastmod')
lastmod.textContent = `Date the page was modified ${document.lastModified}`;

