


import CardContainerTrip from "../components/CardContainerTrip"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import MapBox from "../components/MapBox"
import NavegationBar from "../components/NavegationBar"




function HomeView() {
    return(
        <>
        <NavegationBar/>
        <Hero/>
        <CardContainerTrip/>
        <MapBox/>
        <Footer/>
        </>
    )
}

export default HomeView