let hh1 = document.getElementsByClassName("hrHand 1");
let mh1 = document.getElementsByClassName("minHand 1");
let sh1 = document.getElementsByClassName("secHand 1");
let hh2 = document.getElementsByClassName("hrHand 2");
let mh2 = document.getElementsByClassName("minHand 2");
let sh2 = document.getElementsByClassName("secHand 2");
hh1 = hh1[0];
mh1 = mh1[0];
sh1 = sh1[0];
hh2 = hh2[0];
mh2 = mh2[0];
sh2 = sh2[0];


let hr,mn,sc,hr1,mn1,sc1;
curTime();
curTimeUTC();
setInterval(curTime, 500);
// fn1 gets the time and invokes fn2

// fn2 animates it accordingly  

// fn 2 has a line which invokes fn 1 after an interval


function curTime(){
    let d = new Date();
    hr = d.getHours()%12;
    mn = d.getMinutes();
    sc = d.getSeconds();
    animatorFn(hh1,mh1,sh1,hr,mn,sc);
    curTimeUTC();
}

function curTimeUTC(){
    let d1 = new Date();
    hr1 = d1.getUTCHours()%12;
    mn1 = d1.getUTCMinutes();
    sc1 = d1.getUTCSeconds();
    animatorFn(hh2,mh2,sh2,hr1,mn1,sc1)
}

function animatorFn(hh,mh,sh,hr,mn,sc){
    hr = (hr*30) + (mn*0.5) + (sc*(1/120)) - 180;
    mn = (mn*6) + (sc*(1/10)) - 180;
    sc = (sc*6) - 180;
    hh.style.transform = `rotate(${hr}deg)`
    hh.style.transformOrigin = 'top'
    mh.style.transform = `rotate(${mn}deg)`
    mh.style.transformOrigin = 'top'
    sh.style.transform = `rotate(${sc}deg)`
    sh.style.transformOrigin = 'top'
}





// while(true){
// hr = d.getHours()%12;
// console.log(hr);
// }
// const myTime = new Date() = event.toLocaleString('en-GB', { timeZone: 'IST' });

// while(true){
    
// }