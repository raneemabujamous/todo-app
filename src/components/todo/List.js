import React from "react";
import { useContext, useState, useEffect } from "react";
import { settingsContext } from "../../settings/context";
import { Button, Card, Elevation } from "@blueprintjs/core";
import superagent, { saveCookies } from "superagent";
import cookie from "react-cookies";

import Auth from "../auth/auth";
export default function List(props) {
  const setting = useContext(settingsContext);
  const [currentPage, setCurrentPage] = useState(1);
  const API = "https://dimaalabsiauth-api.herokuapp.com";

  const [activeList, setActiveList] = useState(
    (setting.show ? props.list : props.incomplete).slice(
      0,
      setting.numberDisplatBerScreen
    )
  );
  const [pageNum, setPagesNum] = useState(
    Math.ceil(props.list.length / setting.numberDisplatBerScreen)
  );
  console.log(Math.ceil(setting.numberDisplatBerScreen));
  useEffect(() => {
    setActiveList(
      (setting.show ? props.list : props.incomplete).slice(
        0,
        setting.numberDisplatBerScreen
      )
    );
    setPagesNum(
      Math.ceil(
        (setting.show ? props.list : props.incomplete).length /
          setting.numberDisplatBerScreen
      )
    );
  }, [props.list, props.incomplete]);
  useEffect(() => {
    let start = (currentPage - 1) * setting.numberDisplatBerScreen;
    let end = start + setting.numberDisplatBerScreen;
    setActiveList(
      (setting.show ? props.list : props.incomplete).slice(start, end)
    );
  }, [currentPage, setting.numberDisplatBerScreen]);

  const changePage = (pageNum) => {
    if (pageNum !== currentPage) setCurrentPage(pageNum);
    console.log(currentPage);
  };

  const Page = () => {
    let pageArr = [];
    if (currentPage > 1) {
      pageArr.push(
        <button
          onClick={() => {
            changePage(currentPage - 1);
          }}
        >
          previous
        </button>
      );
    }
    for (let i = 1; i <= pageNum; i++) {
      pageArr.push(
        <button
          onClick={() => {
            changePage(i);
          }}
          key={i}
        >
          {i}
        </button>
      );
    }
    if (currentPage <= pageNum) {
      pageArr.push(
        <button
          onClick={() => {
            changePage(currentPage + 1);
          }}
        >
          next
        </button>
      );
    }
    return <div>{pageArr}</div>;
  };

  return (
    <div>
      {" "}
      <Card className="mainItem2">
        <h3 className="list">Items List</h3>
        {activeList.map((item) => (
          <Card
            className="listCard"
            interactive={true}
            elevation={Elevation.THREE}
            key={item.id}
          >
            <h3>
              <b>{item.text} </b>
            </h3>
            <p>
              <b>Assigned to</b> : {item.assignee}
            </p>
            <p>
              <b>Difficulty</b> : {item.difficulty}
            </p>
            <Button
              class="@ns-button"
              type="button"
              // intent="danger"
              className={
                item.complete ? "bp3-intent-success" : "bp3-intent-danger"
              }
              onClick={() => props.toggleComplete(item.id)}
            >
              Complete : {item.complete.toString()}
            </Button>

            <Button
              onClick={() => props.deleteItem(item.id)}
              type="submit"
              intent="danger"
              text="delete"
            />
          </Card>
        ))}
      </Card>
      <Page /> <p> current Page{currentPage}</p>
    </div>
  );
}
