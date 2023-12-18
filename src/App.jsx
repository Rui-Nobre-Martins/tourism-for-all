import { Route, Switch } from "wouter"

import HomeView from "./views/HomeView"
import TheTravelerView from "./views/TheTravelerView" 
import AddLocationView from "./views/AddLocationView"
import AboutUsView from "./views/AboutUsView"


function App() {
  
  return (
    <>
    <Switch>

        <Route path="/">
          <HomeView/>
        </Route>

        <Route path="/thetraveler">
          <TheTravelerView/>
        </Route>

        <Route path="/addlocation">
          <AddLocationView/>
        </Route>

        <Route path="/aboutus">
          <AboutUsView/>
        </Route>

      </Switch>
    </>
  )
}

export default App
