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
          <Route path="/" component={Home} exact />
          <Route path="/profile" component={Profile} exact />
        </Switch>
      </React.Fragment>
    </Router>
  );
}

export default App;
