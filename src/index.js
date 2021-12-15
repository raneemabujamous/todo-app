import React from "react";
import ReactDOM from "react-dom";

import LoginProvider, { LoginContext } from "./components/auth/LoginContext";
import App from "./app.js";

class Main extends React.Component {
  render() {
    return (
      <LoginProvider>
        <App />
      </LoginProvider>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Main />, rootElement);
