import { Route, Switch } from "wouter"

import HomeView from "./views/HomeView"
import AddLocationView from "./views/AddLocationView"
import AboutUsView from "./views/AboutUsView"
import DetailView from "./views/DetailView"
import PageNotFoundView from "./views/PageNotFoundView"




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

        <Route path="/details/:id">
          {(params) => <DetailView id={params.id}/>}
        </Route>

        <Route path="/details/*" component={PageNotFoundView}/>
        

      </Switch>
    </>
  )
}

export default App
