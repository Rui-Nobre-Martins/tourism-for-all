import { Link, Route, Switch } from "wouter"


import NavegationBar from "./components/NavegationBar"
import CardContainerTrip from "./components/CardContainerTrip"
import MapLocation from "./components/MapLocation"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import SubscribeFrom from "./components/SubscribeFrom"
import HomeView from "./views/HomeView"
import TheTraveler from "./views/TheTraveler" 
import AddLocation from "./views/AddLocation"
import AboutUs from "./views/AboutUs"


function App() {
  
  return (
    <>
    {/* Start Navegation Bar */}
    <NavegationBar>
      <Switch>

        <Route path="/">
          <HomeView/>
        </Route>

        <Route path="/thetraveler">
          <TheTraveler/>
        </Route>

        <Route path="/addlocation">
          <AddLocation/>
        </Route>

        <Route path="/aboutus">
          <AboutUs/>
        </Route>

      </Switch>
    </NavegationBar>
    {/* Finish Navegation Bar */}

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
