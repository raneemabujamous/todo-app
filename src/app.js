import React, { useContext } from "react";
import SettingContext from "../src/settings/context";
import Header from "../src/components/Header";
import ToDo from "./components/todo/todo";
import Footer from "../src/components/Footer";
import "./App.css";
import Login from "../src/components/auth/login";
import { LoginContext } from "./components/auth/LoginContext";
import { If, Then, Else } from "react-if";
import Signup from "./components/auth/Signup";

export default function App(props) {
  const context = useContext(LoginContext);

  return (
    <>
      <If condition={context.loggedIn == true}>
        {console.log(context)}
        <Then>
          <SettingContext>
            <Header />
            <ToDo />

            <Footer />

            <SettingContext />
          </SettingContext>
        </Then>
        <Else>
          <Login />

          <Signup />
        </Else>
      </If>
    </>
  );
}
