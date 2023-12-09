import NavegationBar from "./components/NavegationBar"
import Header from "./components/Header"
import CardContainerTrip from "./components/CardContainerTrip"
import MapLocation from "./components/MapLocation"
import Footer from "./components/Footer"

function App() {
  
  return (
    <>
    {/* Start Navegation Bar */}
    <NavegationBar></NavegationBar>
    {/* Finish Favegation Bar */}

    {/* Start Header slider */}
    <Header></Header>
    {/* Finish Header slider */}

    {/* Start Container with latest trips */}
    <CardContainerTrip></CardContainerTrip>
    {/* Finish Container with latest trips */}

    {/* Start Map Location */}

      colocar MAPBOX

    {/* Finish Map Location */}

    {/* Start footer */}
    <Footer></Footer>
    {/* Finish footer */}
      
    </>
  )
}

export default App
