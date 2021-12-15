import React, { useState, useEffect } from "react";
export const settingsContext = React.createContext();
function Settings(props) {
  const [show, setShow] = useState(true);
  const [numberDisplatBerScreen, setnumberDisplatBerScreen] = useState(2);
  const [sort, setsort] = useState("string");
  const state = {
    show,
    setShow,
    numberDisplatBerScreen,
    setnumberDisplatBerScreen,
    sort,
    setsort,
  };
  useEffect(() => {
    let stringArray = localStorage.getItem("Formsetting");
    let objectArray = JSON.parse(stringArray);

    if (objectArray) {
      setShow(objectArray.show);

      setnumberDisplatBerScreen(Number(objectArray.numberDisplatBerScreen));
    }
    localStorage.clear();
  }, []);

  return (
    <div>
      <settingsContext.Provider value={state}>
        {props.children}
      </settingsContext.Provider>
    </div>
  );
}

export default Settings;
