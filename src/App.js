import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Home from "./screens/Home"
import Profile from "./screens/Profile"
function App() {
  return (
    <Router>
      <React.Fragment>
      <Switch>
        <Route path="/" render={Home} exact/>
        <Route path="/profile" render={Profile} exact/>
      </Switch>
      </React.Fragment>
    
    </Router>
  );
}

export default App;
