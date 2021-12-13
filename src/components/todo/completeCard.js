import React from "react";
import { Button, Card, Elevation } from "@blueprintjs/core";

const Completecard = (props) => {
  return (
    <div>
      {" "}
      <Card className="mainItem2">
        <h3 className="list">Items List</h3>
        {props.arrayComplete.map((item) => (
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
          </Card>
        ))}
      </Card>
    </div>
  );
};

export default Completecard;
