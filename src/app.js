import React from "react";

import ToDo from "./components/todo/todo.js";
import { SettingsContext } from "./settings/context";

function App() {
  return (
    <>
      <SettingsContext>
        <ToDo />
      </SettingsContext>
    </>
  );
}
export default App;
