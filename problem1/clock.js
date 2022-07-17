function showDate() {
    var todayDate = new Date();
    var date = todayDate.getDate();
    var monthsNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    var months = monthsNumbers[todayDate.getMonth()];
    var year = todayDate.getFullYear();
    date = date < 10 ? 0 + "" + date : date;
    months = months < 10 ? 0 + "" + months : months;

    var clockDate = date + "/" + months + "/" + year;
    document.getElementById("date-container").innerText = clockDate;
}
showDate();

function showTime() {
    var todayDate = new Date();
    var hours = todayDate.getHours();
    var minutes = todayDate.getMinutes();
    var seconds = todayDate.getSeconds();
    var session = "AM";

    if (hours === 0) {
        hours = 12;
    } else if (hours > 12) {
        session = "PM";
        hours = hours - 12;
    }
    hours = hours < 10 ? 0 + "" + hours : hours;
    minutes = minutes < 10 ? 0 + "" + minutes : minutes;
    seconds = seconds < 10 ? 0 + "" + seconds : seconds;

    var clockTime = hours + " : " + minutes + " : " + seconds + " " + session;
    document.getElementById("time-container").innerText = clockTime;
}

var timeGun;

function startClock() {
    timeGun = setInterval(showTime, 1000);
}

function stopClock() {
    clearInterval(timeGun);
}