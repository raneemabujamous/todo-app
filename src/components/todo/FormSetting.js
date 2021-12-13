import React, { useContext } from "react";
import { settingsContext } from "../../settings/context";

const Formsetting = (props) => {
  const setting = useContext(settingsContext);
  const changeNumberOfpeage = (e) => {
    e.preventDefault();
    let numberDisplatBerScreen = e.target.value;

    let obj = {
      //   show: show,
      numberDisplatBerScreen: numberDisplatBerScreen,
    };
    setItem(obj);
    // e.target.reset();
    // window.location.href = "/";
  };
  function setItem(obj) {
    localStorage.setItem("Formsetting", JSON.stringify(obj));
  }

  return (
    <div>
      <form>
        <label>number of item in secreen </label>
        <input type="text" onChange={changeNumberOfpeage} />
      </form>
    </div>
  );
};

export default Formsetting;
