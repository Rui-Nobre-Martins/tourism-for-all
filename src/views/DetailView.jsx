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
        </div>
            
        <Footer/>
        </>
    )
}

export default DetailView