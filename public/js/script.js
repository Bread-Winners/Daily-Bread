var inputField = document.querySelector("#zip")
var submitButton = document.querySelector("#submit")
var weatherBox = document.querySelector("#weatherbox")
var recipesBox = document.querySelector("#recipes")
var mapBox = document.querySelector("#myMap")
var locationBlock = document.querySelector('.location-article')

hbs.registerHelper('json', function(context) {
    return JSON.stringify(context);
});
// var map;
// function loadMapScenario() {
//     map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
//         credentials: 'AuXXptxt5USm7y-kh49A1V-e2ELZgNMsZ7Jk2RkJf3wTQPLPN0v3Uyilr24z76_0',
//         center: new Microsoft.Maps.Location(51.50632, -0.12714),
//         mapTypeId: Microsoft.Maps.MapTypeId.aerial,
//         zoom: 10

//     });
// }


// var map;
// function loadMapScenario() {
//     map = new Microsoft.Maps.Map(document.getElementById('myMap'), {});
// }

// loadMapScenario();


// function to fetch Weather Data, then calls the Recipe Data function
function fetchWeatherData(event) {
    event.preventDefault();
    weatherBox.innerHTML = ''
    var zipCode = inputField.value
    const latitude = 41.881832
    const longitude = -87.623177
    var locationApi = 'pk.c55fea20291b9d7be582d4831aed5a51';
    var requestUrl = 'https://maps.locationiq.com/v3/staticmap?key=' + locationApi + '&center=' + latitude + "," + longitude + '&zoom=16&size=400x600&format=png&maptype=roadmap&markers=icon:small-red-cutout|' + latitude + ',' + longitude
    // https://us1.locationiq.com/v1/nearby.php?key=YOUR_ACCESS_TOKEN&lat=LATITUDE&lon=LONGITUDE&tag=POI&radius=IN_METERS

    fetch(requestUrl)
        //if statement for empty input field
        .then(function (response) {
            if (response.ok) {
                return response.json();

            } else {
                var zipCode = document.createElement('p')
                zipCode.textContent = 'Error: Check city name. ' + response.statusText
                weatherBox.appendChild(zipCode)
                recipesBox.style.display = "none"
            }
        })
        .catch(function (error) {
            var zipCode = document.createElement('p')
            zipCode.textContent = 'Error: Unable to connect to APIs. ' + response.statusText
            weatherBox.appendChild(zipCode)
        })
        .then(function (locationData) {
            console.log("weather", locationData);
            // var locationApi = 'pk.c55fea20291b9d7be582d4831aed5a51';
            var locationUrl = 'https://maps.locationiq.com/v3/staticmap?key=' + locationApi + '&center=' + latitude + "," + longitude + '&zoom=16&size=400x600&format=png&maptype=roadmap&markers=icon:small-red-cutout|' + latitude + ',' + longitude;
            var mapImage = document.createElement('img')
            mapImage.setAttribute('src', locationUrl)
            mapImage.setAttribute('class', 'image-box')
            locationBlock.append(mapImage)
            // var temp = locationData.main.temp
            // console.log("temp", temp)
            // localStorage.setItem("temp", JSON.stringify(temp))

            // var zipCode = document.createElement('h4')
            // zipCode.textContent = locationData.name
            // weatherBox.appendChild(zipCode)

            // var description = document.createElement('p')
            // description.textContent = locationData.weather[0].description
            // weatherBox.appendChild(description)

            // var icon = document.createElement('img')
            // icon.src = "http://openweathermap.org/img/wn/" + locationData.weather[0].icon + "@2x.png"
            // weatherBox.appendChild(icon)
            // icon.classList.add("resize")
            // console.log(locationData.weather[0], icon)

            // var currentTemp = document.createElement('p')
            // currentTemp.textContent = "Current temperature: " + locationData.main.temp + "\xB0" + "F"
            // weatherBox.appendChild(currentTemp)

            // var tempHigh = document.createElement('p')
            // tempHigh.textContent = "High temperature: " + locationData.main.temp_max + "\xB0" + "F"
            // weatherBox.appendChild(tempHigh)

            // var tempLow = document.createElement('p')
            // tempLow.textContent = "Low temperature: " + locationData.main.temp_min + "\xB0" + "F"
            // weatherBox.appendChild(tempLow)

        })
    // inputField.value = ''
}

submitButton.addEventListener('click', fetchWeatherData)