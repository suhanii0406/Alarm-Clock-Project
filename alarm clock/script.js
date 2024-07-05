const selectmenu = document.querySelectorAll("select");
let ringtone = new Audio("ringtone.mp3");
const currenttime = document.querySelector("h1");
const content = document.querySelector(".select-time")
const setalarmbtn = document.querySelector("button");
let alarmtime;
for(let i=1 ; i<=12; i++){
    if(i<10){
        i = "0" +i;
    }
    else{
        i=i;
    }
    let opt = document.createElement("option");
    opt.text = i;
    selectmenu[0].appendChild(opt);
}
for(let i=1 ; i<=60; i++){
    if(i<10){
        i = "0" +i;
    }
    else{
        i=i;
    }
    let opt = document.createElement("option");
    opt.text = i;
    selectmenu[1].appendChild(opt);
}
setInterval(()=>{
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let ampm = "AM";
    if(h>=12){
        h=h-12;
        ampm = "PM";
    }
    if(h<10){
        h="0"+h;
    }
    if(h==0){
        h=12;
    }
    if(m<10){
        m="0"+m;
    }
    if(s<10){
        s="0"+s;
    }
    currenttime.innerText = `${h}:${m}:${s} ${ampm}`;
    if(alarmtime === `${h}:${m} ${ampm}`){
        ringtone.play();
        ringtone.loop=true;
    } 
},1000);
let isalarmset;
function setalarm(){
    if(isalarmset){
        alarmtime="";
        ringtone.pause();
        content.classList.remove("disable");
        setalarmbtn.innerText= "Set Alarm";
        return isalarmset=false;
    }
    let time = `${selectmenu[0].value}:${selectmenu[1].value} ${selectmenu[2].value}`;
    if (time.includes("Hour") || time.includes("Minute") || time.includes("AM/PM")) {
        return alert("Please, select a valid time to set  Alarm!");
    }
    alarmtime = time;
    isalarmset = true;        
    content.classList.add("disable");
    setalarmbtn.innerText = "Clear Alarm";
}
setalarmbtn.addEventListener("click",setalarm);
