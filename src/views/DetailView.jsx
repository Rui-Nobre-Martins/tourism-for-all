import { useEffect, useState } from "react"

import NavegationBar from "../components/NavegationBar"
import Slider from "../components/Slider"
import Footer from "../components/Footer"
import MapDetail from "../components/MapDetail"
import CityApiService from "../services/CityApiService"
import WeatherApiService from "../services/WeatherApiService"

function DetailView({id}) {

    const [cityInfo, setCityInfo] = useState({});
    const [weatherInfo, setWeatherInfo] = useState({});
    const [forecastInfo, setforecastInfo] = useState([]);
    
    useEffect(function(){
        (async function(){

            const resultAPI = await CityApiService.getCityData();
            const foundElement = resultAPI.find((cities) => {
                return cities.id == id;
            });

            if (!foundElement) {
                window.location.href = "/pagenotfound";
                return;
            }
            setCityInfo(foundElement);

            
            const urlAPIWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${foundElement.lat}&lon=${foundElement.lon}&exclude=current,daily&appid=${import.meta.env.VITE_API_KEY}&units=metric`;
            
            const resultWeatherAPI = await WeatherApiService.getWeatherData(urlAPIWeather);

            setWeatherInfo(resultWeatherAPI);
            

            const urlAPIForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${foundElement.lat}&lon=${foundElement.lon}&appid=${import.meta.env.VITE_API_KEY}&units=metric`;
            
            const responseForecastAPI = await fetch(urlAPIForecast);
            const resultForecastAPI = await responseForecastAPI.json();

            const newResultForecastAPI = [
                resultForecastAPI.list[7],
                resultForecastAPI.list[15],
                resultForecastAPI.list[23],
                resultForecastAPI.list[31],
                resultForecastAPI.list[39]
            ];

            setforecastInfo(newResultForecastAPI);
        })();
    },[]);

    function getCoord() {
        if ((cityInfo.lat && cityInfo.lon) != undefined) {
            return (<MapDetail key={cityInfo.id} cityInfo={cityInfo}/>)
        }
    }

    function getSlider() {
        if (cityInfo.slider != undefined) {
            return (<Slider key={cityInfo.id} cityInfo={cityInfo}/>)
        }
    }
    
  return(
        <>
        <NavegationBar/>
        
        <div className="detailContainer">
            <div>
                <div className="detailTitle">
                    <h1>{cityInfo.city}</h1>
                    <h2>{cityInfo.country}</h2>
                    <p>From: {cityInfo.from}</p>
                    <p>To: {cityInfo.to}</p>
                </div>
               
                {getSlider()} 
            
                <div className="detailContent">
                    <p className="detailContentText">{cityInfo.description}</p>
                    <div className="cardWeather">
                        <div className="weather">
                            <img className="weatherIcon" src={"https://openweathermap.org/img/wn/"+ weatherInfo.weather?.[0].icon + ".png"} />
                            <h1 className="temp">{Math.round(weatherInfo.main?.temp)}°C</h1>
                            <h2 className="city">{cityInfo.city}</h2>
                            <div className="details">
                                <div className="col">
                                    <img src={cityInfo.weather_img_humidity} />
                                    <div>
                                        <p className="humidity">{weatherInfo.main?.humidity}%</p>
                                            <p>Humidity</p>
                                    </div>
                                </div>
                                <div className="col">
                                    <img src={cityInfo.weather_img_wind} />
                                    <div>
                                        <p className="wind">{weatherInfo.wind?.speed}km/h</p>
                                        <p>Wind Speed</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
        <div className="forecastContainer">
            <div className="forecast" >
                {forecastInfo?.map( item => 
                    <div key={item.dt} className="forecastContent">
                        <p>{(item.dt_txt).substring(0,10)}</p>  
                        <p>{Math.round(item.main.temp) + " ºC"}</p> 
                        <img className="weatherIcon" src={"https://openweathermap.org/img/wn/"+ item.weather?.[0].icon + ".png"} alt="weathericon"></img>
                    </div>
                    )}
            </div>
                
            {getCoord()}
                
        </div>    
        <Footer/>
        </>
    )
}

export default DetailView