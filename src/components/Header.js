import React from "react";
import { Navbar, Button, Alignment } from "@blueprintjs/core";

export default function Header(props) {
  return (
    <div>
      <Navbar>
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>Blueprint</Navbar.Heading>
          <Navbar.Divider />
          <a href="/">
            <Button className="bp3-minimal" icon="home" text="Home" />
          </a>
          <a href="/setting">
            <Button
              className="bp3-minimal"
              icon="document"
              text="setting"
            ></Button>
          </a>
        </Navbar.Group>
      </Navbar>
    </div>
  );
}
