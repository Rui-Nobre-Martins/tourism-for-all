import { Route, Switch } from "wouter"

import HomeView from "./views/HomeView"
import TheTraveler from "./views/TheTraveler" 
import AddLocation from "./views/AddLocation"
import AboutUs from "./views/AboutUs"


function App() {
  
  return (
    <>
    {/* Start Navegation Bar */}
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
   
      
    </>
  )
}

export default App
