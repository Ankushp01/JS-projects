const search = document.querySelector('input')
const temp = document.querySelector('.temp')
let tempImg = document.querySelector('.weather-image')
const city = document.querySelector('.city-name')
const humidity = document.querySelector('.hum')
const wind = document.querySelector('.win')

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const apiKey = "c80e4320835c5007971dc547d97ade14"

// let apiCity = 'mumbai'

document.querySelector('.search-bar img').addEventListener('click', () => {
    weatherChecker(search.value);
})

async function weatherChecker(c) {
    const response = await fetch(apiUrl + `${c}&appid=${apiKey}`)

    if (response.status == 404) {
        document.querySelector('.err').style.display = 'block'
        document.querySelector('.weather').style.display = 'none'
    } else {
        let data = await response.json()

        temp.innerHTML = Math.ceil(data.main.temp) + `°C`
        city.innerHTML = data.name
        humidity.innerHTML = data.main.humidity + ` g/m3.`
        wind.innerHTML = data.wind.speed + ` km/h`
        console.log(data);
        if (data.weather[0].main == 'Clouds') {
            tempImg.src = '/Weather/weather-app-img/images/clouds.png'
        } else if (data.weather[0].main == 'Clear') {
            tempImg.src = '/Weather/weather-app-img/images/clear.png'
        } else if (data.weather[0].main == 'Mist') {
            tempImg.src = '/Weather/weather-app-img/images/mist.png'
        } else if (data.weather[0].main == 'Rain') {
            tempImg.src = '/Weather/weather-app-img/images/rain.png'
        } else if (data.weather[0].main == 'Snow') {
            tempImg.src = '/Weather/weather-app-img/images/snow.png'
        } else if (data.weather[0].main == 'Drizzle') {
            tempImg.src = '/Weather/weather-app-img/images/drizzle.png'
        } else {
            tempImg.src = '/Weather/weather-app-img/images/clear.png'
        }
        document.querySelector('.weather').style.display = 'block'
        document.querySelector('.err').style.display = 'none'
    }

    // apiCity = search.value;
}

