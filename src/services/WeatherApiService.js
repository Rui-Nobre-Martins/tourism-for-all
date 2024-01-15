async function getWeatherData(urlAPIWeather) {

        const responseWeatherAPI = await fetch(urlAPIWeather);
        const resultWeatherAPI = await responseWeatherAPI.json();

        return resultWeatherAPI;
}

export default {
    getWeatherData
}
