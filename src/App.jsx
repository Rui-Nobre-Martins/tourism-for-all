import { Route, Switch } from "wouter"

import HomeView from "./views/HomeView"
import AddLocationView from "./views/AddLocationView"
import AboutUsView from "./views/AboutUsView"
import DetailView from "./views/DetailView"


function App() {
  
  return (
    <>
    <Switch>

        <Route path="/">
          <HomeView/>
        </Route>

        <Route path="/addlocation">
          <AddLocationView/>
        </Route>

        <Route path="/aboutus">
          <AboutUsView/>
        </Route>

        <Route path="/detail">
          <DetailView/>
        </Route>

      </Switch>
    </>
  )
}

export default App
