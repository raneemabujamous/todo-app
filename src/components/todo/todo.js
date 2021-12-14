import React, { useEffect, useState } from "react";
import useForm from "../../hooks/form.js";
import List from "../../components/todo/List";
import { v4 as uuid } from "uuid";
import Formtodo from "./FormTodo.js";
import Completecard from "./completeCard.js";
import FormSetting from "./FormSetting.js";
import Header from "../Header.js";
import Auth from "../auth/auth";
const ToDo = () => {
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit, handleSubmit2 } = useForm(addItem);
  const [completedItem, setComplete] = useState(false);
  const [arrayComplete, setArrayComplete] = useState([]);
  const [changeSet, setChangeSetting] = useState(false);
  function addItem(item) {
    console.log(item);
    item.id = uuid();
    item.complete = false;
    setList([...list, item]);
  }
  function changeSettingContext() {
    setChangeSetting(true);
  }
  function deleteItem(id) {
    const items = list.filter((item) => item.id !== id);
    setList(items);
  }

  function toggleComplete(id) {
    const items = list.map((item) => {
      if (item.id == id) {
        item.complete = !item.complete;
      }
      return item;
    });

    setList(items);
  }

  useEffect(() => {
    let incompleteCount = list.filter((item) => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [list]);
  const completed = () => {
    const arr = [];
    list.map((e) => {
      if (e.complete) {
        arr.push(e);
      }
    });
    setComplete(true);
    console.log(arr);
    setArrayComplete(arr);
  };
  return (
    <>
      <Auth capability="create">
        {/* <Formtodo
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          incomplete={incomplete}
          completed={completed}
          changeSettingContext={changeSettingContext}
        /> */}
        <div>
          {" "}
          <header>
            <h1>To Do List: {incomplete} items pending</h1>
          </header>
          <form onSubmit={handleSubmit}>
            <h2>Add To Do Item</h2>

            <label>
              <span>To Do Item</span>
              <input
                onChange={handleChange}
                name="text"
                type="text"
                placeholder="Item Details"
              />
            </label>

            <label>
              <span>Assigned To</span>
              <input
                onChange={handleChange}
                name="assignee"
                type="text"
                placeholder="Assignee Name"
              />
            </label>

            <label>
              <span>Difficulty</span>
              <input
                onChange={handleChange}
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
            <button type="submit" onClick={completed}>
              completed item
            </button>
            {/* <button type="submit" onClick={props.changeSettingContext}>
          change setting
        </button> */}
          </label>
        </div>
      </Auth>
      <Auth capability="read">
        <List
          incomplete={incomplete}
          list={list}
          toggleComplete={toggleComplete}
          deleteItem={deleteItem}
        />
      </Auth>
      {completedItem && (
        <Completecard completed={completed} arrayComplete={arrayComplete} />
      )}
      {changeSet && (
        <FormSetting handleSubmit={handleSubmit2} handleChange={handleChange} />
      )}
      {/* <Header changeSettingContext={changeSettingContext} /> */}
    </>
  );
};

export default ToDo;
