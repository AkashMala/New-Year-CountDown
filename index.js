const dayE1=document.getElementById("day")
const hourE1=document.getElementById("hour")
const minuteE1=document.getElementById("minute")
const secondE1=document.getElementById("second")

const newYearDate=new Date("Jan 1,2025 00:00:00").getTime()

updateCountDown()
function updateCountDown(){
    const now=new Date().getTime();
const gap=newYearDate - now;
const second=1000;
const minute=second*60;
const hour=minute*60;
const day=hour*24;
const d=Math.floor(gap/day);
const h=Math.floor((gap%day)/hour);
const m=Math.floor((gap%hour)/minute);
const s=Math.floor((gap%minute)/second);
dayE1.innerHTML=d;
hourE1.innerHTML=h;
minuteE1.innerHTML=m;
secondE1.innerHTML=s;
setTimeout(updateCountDown,1000);

}
