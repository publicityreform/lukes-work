// get the current date and format it
const d = new Date();
const m = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let n = m[d.getMonth()];
// put the date text into the html
document.getElementById("date").innerHTML = n+' '+d.getDate()+', '+d.getFullYear();
