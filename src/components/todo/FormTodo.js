import React from "react";

const Formtodo = (props) => {
  return (
    <div>
      {" "}
      <header>
        <h1>To Do List: {props.incomplete} items pending</h1>
      </header>
      <form onSubmit={props.handleSubmit}>
        <h2>Add To Do Item</h2>

        <label>
          <span>To Do Item</span>
          <input
            onChange={props.handleChange}
            name="text"
            type="text"
            placeholder="Item Details"
          />
        </label>

        <label>
          <span>Assigned To</span>
          <input
            onChange={props.handleChange}
            name="assignee"
            type="text"
            placeholder="Assignee Name"
          />
        </label>

        <label>
          <span>Difficulty</span>
          <input
            onChange={props.handleChange}
            defaultValue={3}
            type="range"
            min={1}
            max={5}
            name="difficulty"
          />
        </label>

        <label>
          <button type="submit">Add Item</button>
        </label>
      </form>
      <label>
        <button type="submit" onClick={props.completed}>
          completed item
        </button>
        {/* <button type="submit" onClick={props.changeSettingContext}>
          change setting
        </button> */}
      </label>
    </div>
  );
};

export default Formtodo;
