var countdownTime = 0;

function setTime(time){
    countdownTime = (new Date()).getTime() + time*60000;
}

const updateTimer = setInterval( function(){
    
    var now = new Date().getTime();
    var timeleft = countdownTime - now;
        
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
        
    document.getElementById("minutes").innerHTML = minutes + "m ";
    document.getElementById("seconds").innerHTML = seconds + "s ";

    if (timeleft < 0) {
        clearInterval(updateTimer);
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
    }
}, 1000);
