$(document).ready(function() 
{
    $('#searchButton').click(function() 
    {
        let cityName = $('#cityInput').val();
        getWeatherData(cityName);
    });

    function getWeatherData(city) 
    {
        let apiKey = 'ca454dfaeb62692fbc3b34b0726c0f2d'; 
        let limiit = 1;
        let weatherURL = 'http://api.openweathermap.org/geo/1.0/direct?q='+city+'&limit='+limiit+'&appid='+apiKey;
        $.getJSON(weatherURL, function(data) {
            let lat = data[0].lat;
            let lon = data[0].lon;
            // alert(lat);
            // alert(lon);
            let apiKey = 'ca454dfaeb62692fbc3b34b0726c0f2d'; 
            let units = 'metric'; // Or 'imperial' if you prefer Fahrenheit
            let exclude = 'minutely,hourly'; 
            let weatherURL = 'https://api.openweathermap.org/data/3.0/onecall?lat='+lat+'&lon='+lon+'&appid=' + apiKey + '&units=' + units + '&exclude=' + exclude;
            $.getJSON(weatherURL, function(data) {
                console.log("Weather data:", data); 
                updateCurrentWeather(data);
                
            }
            ).fail(function(error)
            { 
                console.error("Request failed:", error); 
                alert("Failed to get weather data. Please check your internet connection and try again.");
            }
            );
        });
    }
    function updateCurrentWeather(currentData) 
    {
     
        $('#cityName').text('Latitude: '+ currentData.lat + ' Longitude: '+ currentData.lon);
        $('#currentTemp').text('Temperature: ' + currentData.current.temp + '°C');
        $('#feelsLike').text('Feels like: ' + currentData.current.feels_like + '°C');
        $('#weatherDesc').text('Description: : '+currentData.current.weather[0].description);
        $('#humidity').text('Humidity: '+currentData.current.humidity + '%');
        $('#windSpeed').text('Wind Speed: '+currentData.current.wind_speed + 'm/s');
        let iconCode = currentData.daily[0].weather[0].icon;
        $('#weatherIcon').attr('src', 'http://openweathermap.org/img/wn/' + iconCode + '.png');
        updateForecast(currentData.daily);
    }

    function updateForecast(forecastData) 
    {
    
        let table = $('#forecastTable');
        table.empty(); 
        for (let i = 0; i < forecastData.length; i++) 
        {
            let date = new Date(forecastData[i].dt * 1000); 
            let day = date.toLocaleDateString('en-US', { weekday: 'long' });
            let temp = forecastData[i].temp.day;
            let weather = forecastData[i].weather[0].description;
            let iconCode = forecastData[i].weather[0].icon;
            let row = '<tr><td>' + day + '</td><td>' + temp + '°C</td><td>' + weather + '</td><td><img src="http://openweathermap.org/img/wn/' + iconCode + '.png"></td></tr>';
            table.append(row);
        }
    }
});
