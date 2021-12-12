import React, { Component } from "react";
export const { settingsContext } = React.createContext();

export default class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: true,
      numberDisplatBerScreen: 5,
      sort: "string",
    };
  }

  render() {
    return (
      <settingsContext.Provider value={this.state}>
        {this.props.children}
      </settingsContext.Provider>
    );
  }
}
