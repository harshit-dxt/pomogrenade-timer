var startStopBtn = document.getElementById("startStopBtn");
var startStop = document.getElementById("startStop");

function animate() {
    startStopBtn.classList.add("animate-element");
    startStop.classList.add('animate__animated', 'animate__bounce');
    
}

startStopBtn.addEventListener('animationend', () =>{
    startStopBtn.classList.remove("animate-element");
});

startStop.addEventListener("animationend", () => {
    startStop.classList.remove("animate__animated", "animate__bounce");
});


var countdownTime;
var mins = 10;
var secs = 0;
var intervalId;
function setTime(time){
    document.getElementById("minutes").innerHTML = time;
    document.getElementById("seconds").innerHTML = "00";
    mins = time;
    secs = 0;
    startStop.innerHTML = "START";
    document.getElementById("startStopBtn").setAttribute("onclick", "beginCountdown()"); 
    clearInterval(intervalId);
}

function stopCountdown(){   
    animate(); 
    startStop.innerHTML = "START";
    var now = new Date().getTime();
    var timeleft = countdownTime - now;
    mins = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    secs = Math.floor((timeleft % (1000 * 60)) / 1000);
    document.getElementById("minutes").innerHTML = mins;
    document.getElementById("seconds").innerHTML = secs;
    clearInterval(intervalId);
    document.getElementById("startStopBtn").setAttribute("onclick", "beginCountdown()"); 
}

function beginCountdown(){
    animate();
    startStop.innerHTML = "STOP";
    countdownTime = (new Date()).getTime() + mins*60000 + secs * 1000;
    intervalId = setInterval(updateTimer, 1000);
    document.getElementById("startStopBtn").setAttribute("onclick", "stopCountdown()");
}

const updateTimer = function(){
    
    var now = new Date().getTime();
    var timeleft = countdownTime - now;
        
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
        
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (timeleft < 0) {
        clearInterval(updateTimer);
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
        document.getElementById("blast").style.display="inherit";
        document.getElementById("timer-body").style.display="none";
        setTimeout(()=>{
            document.getElementById("blast").style.display="none";
            document.getElementById("timer-body").style.display="";
            document.getElementById("startStopBtn").setAttribute("onclick", "beginCountdown()");
            startStop.innerHTML = "START";
            setTime(10);
        }, 3000);
    }
};

// ------ANIMATION----------


var animation = bodymovin.loadAnimation({
    container: document.getElementById('animContainer'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://assets10.lottiefiles.com/packages/lf20_1Urv0u.json' // lottie file path
  })

// function reset() {
//     var duration = 5000;
//     $({to:0}).animate({to:1}, duration, function() {
//         document.getElementById("blast").style.display="none";
//         document.getElementById("timer-body").style.display="inherit";  
//     })
// }

// https://stackoverflow.com/questions/35133311/js-settimeout-alternative