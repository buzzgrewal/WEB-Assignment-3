$(document).ready(function() 
{
    function updateTime() 
    {
        const currentTime = new Date();

        let hours = currentTime.getHours();
        let minutes = currentTime.getMinutes();
        let seconds = currentTime.getSeconds();
        let period = "AM";

     
        if (hours > 12) {
            hours -= 12;
            period = "PM";
        }
        if (hours === 0) {
            hours = 12; 
        }

 
        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

        $('#hours').text(hours);
        $('#minutes').text(minutes);
        $('#seconds').text(seconds);
        $('#period').text(period);


        setTimeout(updateTime, 1000);
    }

    updateTime(); 
});
