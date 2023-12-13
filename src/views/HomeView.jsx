import CardContainerTrip from "../components/CardContainerTrip"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import MapLocation from "../components/MapLocation"
import NavegationBar from "../components/NavegationBar"
import SubscribeFrom from "../components/SubscribeFrom"


function HomeView() {
    return(
        <>
        <NavegationBar/>
        <Hero/>
        <CardContainerTrip/>
        <MapLocation/>
        <SubscribeFrom/>
        <Footer/>
        </>
    )
}

export default HomeView