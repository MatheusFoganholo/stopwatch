var milliseconds = 0;
var seconds = 0;
var minutes = 0;
var hours = 0;

function startTimer () {
    control = setInterval(cronometro,10);
    document.getElementById("startTimer").disabled = true;
    document.getElementById("pauseTimer").disabled = false;
    document.getElementById("continueTimer").disabled = true;
    document.getElementById("restartTimer").disabled = false;
}

function pauseTimer () {
    clearInterval(control);
    document.getElementById("pauseTimer").disabled = true;
    document.getElementById("continueTimer").disabled = false;
}

function restartTimer () {
    clearInterval(control);
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    Milliseconds.innerHTML = ":00";
    Seconds.innerHTML = ":00";
    Minutes.innerHTML = ":00";
    Hours.innerHTML = "00";
    document.getElementById("startTimer").disabled = false;
    document.getElementById("pauseTimer").disabled = true;
    document.getElementById("continueTimer").disabled = true;
    document.getElementById("restartTimer").disabled = true;
}
function cronometro () {
    if (milliseconds < 99) {
        milliseconds++;
        if (milliseconds < 10) { milliseconds = "0"+milliseconds }
        Milliseconds.innerHTML = ":"+milliseconds;
    }
    if (milliseconds == 99) {
        milliseconds = -1;
    }
    if (milliseconds == 0) {
        seconds ++;
        if (seconds < 10) { seconds = "0"+seconds }
        Seconds.innerHTML = ":"+seconds;
    }
    if (seconds == 59) {
        seconds = -1;
    }
    if ( (milliseconds == 0)&&(seconds == 0) ) {
        minutes++;
        if (minutes < 10) { minutes = "0"+minutes }
        Minutes.innerHTML = ":"+minutes;
    }
    if (minutes == 59) {
        minutes = -1;
    }
    if ( (milliseconds == 0)&&(seconds == 0)&&(minutes == 0) ) {
        hours ++;
        if (hours < 10) { hours = "0"+hours }
        Hours.innerHTML = hours;
    }
}