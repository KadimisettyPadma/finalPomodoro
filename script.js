const work_duration=10 ;
const Break_time=5;

let time_left=work_duration;
let ispaused=true;
let timeInterval;
let cycles = 4;

const timer=document.getElementById('Timer');
const start=document.getElementById('Start');
const pause=document.getElementById('Pause');
const Stop=document.getElementById('Stop');

function starttimer(){
    timeInterval=setInterval(function(){
    if(time_left>0){
        time_left--;
        updatedisplay();
    }
     else {
            clearInterval(timeInterval);
            switchDuration(); // Use switchDuration() here
            ispaused = true;
            updatedisplay();
          }
        }, 1000);
      }
    /*else{
        clearInterval(timeInterval);
        if(isworkduration()){
            time_left=work_duration;
            timer.style.color='red';
            
        }
        else{
            time_left=Break_time;
            timer.style.color='blue';
           
        }
        ispaused=true;
        updatedisplay();
        
    }
    },1000);*/

function isworkduration(){
    return time_left===work_duration;
}
function pauseTimer(){
    clearInterval(timeInterval);
    ispaused=true;
}
function StopTimer(){
    clearInterval(timeInterval);
    time_left=work_duration;
    ispaused=true;
    updatedisplay();
}
function updatedisplay(){
    const minutes=Math.floor(time_left/60);
    const seconds=time_left % 60;
    const timeString= `${minutes}:${seconds<10 ? `0${seconds}`:seconds}`;
    timer.innerHTML=timeString;
}

start.addEventListener('click',function(){
    if(ispaused){
        starttimer();
        ispaused=false;
    }
   
})
pause.addEventListener('click',function(){
    if(!ispaused){
        pauseTimer();
        ispaused=true;
    }
})

Stop.addEventListener('click',function(){
    StopTimer();
})

function switchDuration() {
    if (time_left === 0) {
      if (cycles > 0) {
        cycles--;
        if (cycles % 2 === 1) {
          time_left = Break_time;
          timer.style.color = 'blue';
        } else {
          time_left = work_duration;
          timer.style.color = 'green';
        }
      } else {
        alert("Pomodoro session completed!");
      }
    }
}