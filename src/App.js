import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AddDoctor from "./components/AddDoctor/AddDoctor";
import AllPatients from "./components/AllPatients/AllPatients";

import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import DrAppointment from "./components/DrAppointment/DrAppointment/DrAppointment";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login/Login";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/appointment">
          <DrAppointment></DrAppointment>
        </Route>
        <Route path="/dashboard/appointment">
          <Dashboard></Dashboard>
        </Route>
        <Route path="/dashboard/allPatients">
          <AllPatients />
        </Route>
        <Route path="/dashboard/addADoctor">
          <AddDoctor></AddDoctor>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
