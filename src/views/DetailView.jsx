import { useEffect, useState } from "react"

import NavegationBar from "../components/NavegationBar"
import Slider from "../components/Slider"
import Footer from "../components/Footer"

function DetailView({id}) {

    const [cityInfo, setCityInfo] = useState({});
    const [weatherInfo, setWeatherInfo] = useState({});
    
    useEffect(function(){
        (async function(){

            const responseAPI = await fetch("/api/citiesInfo.json")
            const resultAPI = await responseAPI.json();
            
            
            const foundElement = resultAPI.find((cities) => {
                return cities.id == id;
            });

            console.log(foundElement);
            setCityInfo(foundElement);

            const urlAPIWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${foundElement.lat}&lon=${foundElement.lon}&exclude=current,daily&appid=237b465750446e0f62f21b7e627d067c&units=metric`

            const responseWeatherAPI = await fetch(urlAPIWeather);
            const resultWeatherAPI = await responseWeatherAPI.json();

            console.log(resultWeatherAPI);
            setWeatherInfo(resultWeatherAPI);
            
        })();
    },[]);
    
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

                <Slider/>

                <div className="detailContent">
                    <p className="detailContentText">{cityInfo.description}</p>
                    
                    
                    <div className="cardWeather">
                        <div className="weather">
                            <img className="weatherIcon" src={cityInfo.weather_img_sky} />
                            <h1 className="temp">{weatherInfo.main?.temp}°C</h1>
                            <h2 className="city">{cityInfo.city}</h2>
                                <div className="details">
                                    <div className="col">
                                        <img src={cityInfo.weather_img_humidity} />
                                    <div>
                                        <p className="humidity">{weatherInfo.main?.humidity}</p>
                                        <p>Humidity</p>
                                    </div>
                                    </div>
                                    <div className="col">
                                        <img src={cityInfo.weather_img_wind} />
                                    <div>
                                        <p className="wind">{weatherInfo.wind?.speed}</p>
                                        <p>Wind Speed</p>
                                    </div>
                                    </div>
                                </div>
                        </div>
                    </div>


                </div>
            </div>

            {/* <div className="cardWeather">
                <div className="weather">
                    <img className="weatherIcon" src={cityInfo.weather_img_sky} />
                    <h1 className="temp">{weatherInfo.main?.temp}°C</h1>
                    <h2 className="city">{cityInfo.city}</h2>
                        <div className="details">
                            <div className="col">
                                <img src={cityInfo.weather_img_humidity} />
                            <div>
                                <p className="humidity">{weatherInfo.main?.humidity}</p>
                                <p>Humidity</p>
                            </div>
                            </div>
                            <div className="col">
                                <img src={cityInfo.weather_img_wind} />
                            <div>
                                <p className="wind">{weatherInfo.wind?.speed}</p>
                                <p>Wind Speed</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div> */}

            </div>

            
        <Footer/>
        </>
    )
}

export default DetailView