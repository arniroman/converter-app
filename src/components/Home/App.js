import React, { Component } from "react";
import logo from "../../logo.svg";
import Convertor from "../Convertor/Convertor";
import { withStyles } from "material-ui";
import { styles } from "./StylesApp";
import TableResultRate from "../../components/Table/TableView";

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.wrapp}>
        <div className={classes.convertBox}>
          <Convertor />
          <TableResultRate />
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(App);
