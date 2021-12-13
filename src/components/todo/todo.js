import React, { useEffect, useState } from "react";
import useForm from "../../hooks/form.js";
import List from "../../components/todo/List";
import { v4 as uuid } from "uuid";
import Formtodo from "./FormTodo.js";
import Completecard from "./completeCard.js";
import FormSetting from "./FormSetting.js";
import Header from "../Header.js";

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
      <Formtodo
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        incomplete={incomplete}
        completed={completed}
        changeSettingContext={changeSettingContext}
      />
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
    </>
  );
};

export default ToDo;
