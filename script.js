const startStopBtn = document.getElementById("startStopBtn");
    const startStop = document.getElementById("startStop");

    function animate() {
        startStopBtn.classList.add("animate-element");
        startStop.classList.add('animate__animated', 'animate__bounce');
    }

    startStopBtn.addEventListener('click', function () {
        animate();
        if(startStop.innerHTML === "STOP") {
            startStop.innerHTML = "START";
        }
        startStop.innerHTML = "STOP";
    })