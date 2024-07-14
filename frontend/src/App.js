import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/profile/:id" component={ProfilePage} />
        <Route path="/register" component={RegisterPage} />
      </Switch>
    </Router>
  );
}

export default App;
