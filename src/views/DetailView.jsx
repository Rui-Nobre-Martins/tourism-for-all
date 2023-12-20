import { useEffect, useState } from "react"

import NavegationBar from "../components/NavegationBar"
import Slider from "../components/Slider"
import Footer from "../components/Footer"




function DetailView() {

    const [citiesinfo, setCitiesInfo] = useState({})
    const [countriesInfo, setCountriesInfo] = useState ({})

    useEffect(function(){
        (async function(){

            const url = "/api/citiesInfo.json";

            const response = await fetch(url);
            const result = await response.json();
            
            const foundElement = result.find((cities) => {
                return cities.id == id;
            });
            console.log(foundElement);
            setCitiesInfo(foundElement);
            setCountriesInfo(foundElement);
        })();
    },[]);
  return(
        <>
        <NavegationBar/>
        <Slider/>
        

        <Footer/>
        </>
    )
}

export default DetailView