import React, { useEffect, useState, useContext } from "react";
import useForm from "../../hooks/form.js";
import List from "../../components/todo/List";
import { v4 as uuid } from "uuid";
import Formtodo from "./FormTodo.js";
import Completecard from "./completeCard.js";
import FormSetting from "./FormSetting.js";
import Header from "../Header.js";
import Auth from "../auth/auth";
import superagent, { saveCookies } from "superagent";
import cookie from "react-cookies";

import { settingsContext } from "../../settings/context";

// import { show } from "@blueprintjs/core/lib/esm/components/context-menu/contextMenu";
const ToDo = (props) => {
  const { show } = React.useContext(settingsContext);

  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit, handleSubmit2 } = useForm(addItem);
  const [completedItem, setComplete] = useState(false);
  const [arrayComplete, setArrayComplete] = useState([]);
  const [changeSet, setChangeSetting] = useState(false);
  const [showedList, setShow] = useState([]);
  const [active, setActive] = useState(1);
  const API = "https://dimaalabsiauth-api.herokuapp.com";

  const stateDisplay = show[0];

  // function addItem(item) {
  //   console.log(item);
  //   item.id = uuid();
  //   item.complete = false;
  //   setList([...list, item]);
  // }
  async function addItem(item) {
    const token = cookie.load("token");
    let respone = await superagent
      .post(`${API}/todo`, item)
      .set("authorization", `Bearer ${token}`);
  }
  function changeSettingContext() {
    setChangeSetting(true);
  }
  async function deleteItem(id) {
    const token = cookie.load("token");
    await superagent
      .delete(`${API}/todo?index=${id}`)
      .set("authorization", `Bearer ${token}`);
  }

  async function toggleComplete(id) {
    const token = cookie.load("token");
    let items = await props.list.map((item, index) => {
      if (id === index) {
        if (item.complete === "complete") {
          item.complete = "pending";
        } else {
          item.complete = "complete";
        }
        return item;
      }
    });
    let obj = {
      toDo: items[id].toDo,
      assignee: items[id].assignee,
      difficulty: items[id].difficulty,
      complete: items[id].complete,
    };

    let respone = await superagent
      .put(`${API}/todo?index=${id}`, obj)
      .set("authorization", `Bearer ${token}`);

    setList(respone.body.todo);
  }

  // useEffect(() => {
  //   let incompleteCount = list.filter((item) => !item.complete).length;
  //   setIncomplete(incompleteCount);
  //   document.title = `To Do List: ${incomplete}`;
  //   let filterArr = list.filter((item) => item.complete === false);
  //   show ? setShow(filterArr) : setShow(list);
  // }, [list]);
  useEffect(async () => {
    const token = cookie.load("token");
    let respone = await superagent
      .get(`${API}/todo`)
      .set("authorization", `Bearer ${token}`);

    props.setList(respone.body.todo);
  }, [props.list]);

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

      <List
        incomplete={incomplete}
        list={list}
        toggleComplete={toggleComplete}
        deleteItem={deleteItem}
      />

      {completedItem && (
        <Completecard completed={completed} arrayComplete={arrayComplete} />
      )}
      {changeSet && (
        <FormSetting handleSubmit={handleSubmit2} handleChange={handleChange} />
      )}
      {/* <Header changeSettingContext={changeSettingContext} /> */}
      <FormSetting />
    </>
  );
};

export default ToDo;
