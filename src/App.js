import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AllCats } from "./components/AllCats";
import { Loader } from "./components/Loader";
import { LovelyCats } from "./components/LovelyCats";
import { Navbar } from "./components/Navbar"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="Wrapper">
          <Navbar/>
          <Loader/>
          <Switch>
            <Route path={"/"} exact component={AllCats} />
            <Route path={"/levelycats"}  component={LovelyCats} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
