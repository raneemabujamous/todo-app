// import React from "react";

// import ToDo from "./components/todo/todo.js";
// import Settings from "./settings/context";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import FormSetting from "./components/todo/FormSetting";
// import "./App.css";
// import Login from "./components/auth/login";
// import LoginContext from "./components/auth/LoginContext";

// function App() {
//   return (
//     <>
//       <LoginContext>
//         <Login />
//         <Settings>
//           <ToDo />
//         </Settings>
//         {/* </Login> */}
//       </LoginContext>
//     </>
//   );
// }
// export default App;
import React from "react";
import SettingContext from "../src/settings/context";
import Header from "../src/components/Header";
import ToDo from "../src/components/todo/todo";
import Footer from "../src/components/Footer";
import "./App.css";
// import Setting from "./components/Setting";
import Login from "../src/components/auth/login";
import LoginContext from "../src/components/auth/LoginContext";
export default class App extends React.Component {
  render() {
    return (
      <>
        <LoginContext>
          <Login />
          <SettingContext>
            <Header />
            <ToDo />
            <Footer />
          </SettingContext>
        </LoginContext>
      </>
    );
  }
}
