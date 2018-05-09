import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "material-ui/Table";
import Paper from "material-ui/Paper";
import { styles } from "./StylesTable";
import { withStyles } from "material-ui";

class TableResultRate extends Component {
  rendTableView = () => {
    const { classes } = this.props;
    const {
      result,
      initials,
      exchange_rate
    } = this.props.rateData.convert_result;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Bank</TableCell>
              <TableCell>Echange rate</TableCell>
              <TableCell>Result</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>NBU</TableCell>
              <TableCell>{exchange_rate}</TableCell>
              <TableCell>
                <span>{result}</span>
                <span> {initials}</span>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    );
  };
  render() {
    const { classes } = this.props;
    return <div className={classes.tableWrap}>{this.rendTableView()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    rateData: state.convertRate
  };
};

export default compose(withStyles(styles), connect(mapStateToProps, {}))(
  TableResultRate
);
