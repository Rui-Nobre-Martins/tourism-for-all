import NavegationBar from "./components/NavegationBar"
import CardContainerTrip from "./components/CardContainerTrip"
import MapLocation from "./components/MapLocation"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import SubscribeFrom from "./components/SubscribeFrom"

function App() {
  
  return (
    <>
    {/* Start Navegation Bar */}
    <NavegationBar></NavegationBar>
    {/* Finish Favegation Bar */}

    {/* Start Header slider */}
    <Hero></Hero>
    {/* Finish Header slider */}

    {/* Start Container with latest trips */}
    <CardContainerTrip></CardContainerTrip>
    {/* Finish Container with latest trips */}

    {/* Start Map Location */}
    <MapLocation></MapLocation>
    {/* Finish Map Location */}

    {/* Start Subscribe Form */}
    <SubscribeFrom></SubscribeFrom>
    {/* Finish Subscribe Form */}

    {/* Start footer */}
    <Footer></Footer>
    {/* Finish footer */}
      
    </>
  )
}

export default App
