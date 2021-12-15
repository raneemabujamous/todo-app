import React, { useContext } from "react";
import { settingsContext } from "../../settings/context";

const Formsetting = (props) => {
  const setting = useContext(settingsContext);
  const handleSubmit = (e) => {
    // e.preventDefault();
    let numberDisplatBerScreen = e.target.numberDisplatBerScreen.value;
    let show = e.target.show.value;
    setting.setShow(show);
    console.log(show);
    console.log(numberDisplatBerScreen);
    let obj = {
      show: show,
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
      <form onSubmit={handleSubmit}>
        <label>number of item in secreen </label>
        <input type="text" name="numberDisplatBerScreen" />
        <label for="show">show completed</label>

        <select name="show">
          <option value="true">true</option>
          <option value="false">false</option>
        </select>
        <button>submit</button>
      </form>
    </div>
  );
};

export default Formsetting;
