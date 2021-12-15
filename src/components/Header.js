import React, { useContext } from "react";
import { LoginContext } from "../components/auth/LoginContext";

export default function Header(props) {
  const context = useContext(LoginContext);
  return (
    <>
      <nav className="bp3-navbar .modifier bp3-dark">
        <div className="bp3-navbar-group bp3-align-left">
          <div className="bp3-navbar-heading">TO-DO</div>
        </div>
        <div className="bp3-navbar-group bp3-align-right">
          <button
            className="bp3-button bp3-minimal bp3-icon-log-out"
            onClick={context.logout}
          >
            log out
          </button>
        </div>
      </nav>
    </>
  );
}
