let hrs = document.getElementById(hrs);
let mins = document.getElementById(mins);
let secs = document.getElementById(secs);

let currentTime = new Date();
 

hrs.innerHTML = currentTime.getHours();
mins.innerHTML = currentTime.getMinutes();
secs.innerHTML = currentTime.getSeconds();


 