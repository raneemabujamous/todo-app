import React from "react";

import ToDo from "./components/todo/todo.js";
import Settings from "./settings/context";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FormSetting from "./components/todo/FormSetting";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Settings>
            <Route exact path="/">
              <Header />
              <ToDo />
              <Footer />
            </Route>
            <Route path="/setting">
              <Header />
              <FormSetting />
              <Footer />
            </Route>
          </Settings>
        </Switch>
      </Router>
    </>
  );
}
export default App;
