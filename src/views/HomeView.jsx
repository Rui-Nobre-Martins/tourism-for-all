

import { useEffect, useState } from "react"
import CardContainerTrip from "../components/CardContainerTrip"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import MapLocation from "../components/MapLocation"
import NavegationBar from "../components/NavegationBar"



function HomeView() {

    const [citiesInfo, setCitiesInfo] = useState([])

    useEffect(function(){
        (async function(){

            const url = "/api/citiesInfo.json";

            const response = await fetch(url);
            const result = await response.json();

            console.log(result);
            setCitiesInfo(result);
        })();
    },[]);




    return(
        <>
        <NavegationBar/>
        <Hero/>
        <CardContainerTrip/>
        <MapLocation/>
        <Footer/>
        </>
    )
}

export default HomeView