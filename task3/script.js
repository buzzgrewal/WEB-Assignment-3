$(document).ready(function() {
    function updateTime() {
        const currentTime = new Date();

        let hours = currentTime.getHours();
        let minutes = currentTime.getMinutes();
        let seconds = currentTime.getSeconds();
        let period = "AM";

        // 12-hour format 
        if (hours > 12) {
            hours -= 12;
            period = "PM";
        }
        if (hours === 0) {
            hours = 12; 
        }

        // Add leading zeros
        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

        $('#hours').text(hours);
        $('#minutes').text(minutes);
        $('#seconds').text(seconds);
        $('#period').text(period);

        // Update the time every second
        setTimeout(updateTime, 1000);
    }

    updateTime(); //  Start the clock
});
