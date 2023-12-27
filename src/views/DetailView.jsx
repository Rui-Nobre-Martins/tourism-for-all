import { useEffect, useState } from "react"

import NavegationBar from "../components/NavegationBar"
import Slider from "../components/Slider"
import Footer from "../components/Footer"

function DetailView({id}) {

    const [cityInfo, setCityInfo] = useState({})
    

    useEffect(function(){
        (async function(){

            const url = "/api/citiesInfo.json";

            const response = await fetch(url);
            const result = await response.json();
            
            const foundElement = result.find((cities) => {
                return cities.id == id;
            });
            console.log(foundElement);
            setCityInfo(foundElement);
            
            
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
                    <img className="detailContentImage" src={cityInfo.image}/> 
                </div>
            </div>

            <div className="cardWeather">
                <div className="weather">
                    <img className="weatherIcon" src={cityInfo.weather_img_sky} />
                    <h1 className="temp">{cityInfo.weather_temp}</h1>
                    <h2 className="city">{cityInfo.city}</h2>
                        <div className="details">
                            <div className="col">
                                <img src={cityInfo.weather_img_humidity} />
                            <div>
                                <p className="humidity">{cityInfo.weather_humidity}</p>
                                <p>Humidity</p>
                            </div>
                            </div>
                            <div className="col">
                                <img src={cityInfo.weather_img_wind} />
                            <div>
                                <p className="wind">{cityInfo.weather_wind}</p>
                                <p>Wind Speed</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
        <Footer/>
        </>
    )
}

export default DetailView