import NavegationBar from "./components/NavegationBar"
import Header from "./components/Hero"
import CardContainerTrip from "./components/CardContainerTrip"
import MapLocation from "./components/MapLocation"
import Footer from "./components/Footer"
import Hero from "./components/Hero"

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


    {/* Finish Map Location */}

    {/* Start footer */}
    <Footer></Footer>
    {/* Finish footer */}
      
    </>
  )
}

export default App
