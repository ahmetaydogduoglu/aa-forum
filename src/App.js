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
      <Switch>
        <Route path="/" >
          <Home />
        </Route>
        <Route path="/profile" >
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
