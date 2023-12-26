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
        <Slider/>
        <div className="detailTitle">
            <h1>{cityInfo.city}</h1>
            <h2>{cityInfo.country}</h2>
        </div>
        <div className="detailDate">
            <p>From: {cityInfo.from}</p>
            <p>To: {cityInfo.to}</p>
        </div>

        <div className="detailDescription">
            <p>{cityInfo.description}</p>
        </div>
        
        <div className="detailimage">
        <img src={cityInfo.image}/> 
        </div>
        <Footer/>
        </>
    )
}

export default DetailView