var countdownTime = 10;
function setTime(time){
    countdownTime = (new Date()).getTime() + time*60000;
    clearInterval(updateTimer);
}

function beginCountdown(){
    setInterval(updateTimer, 1000);
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
    }
};
