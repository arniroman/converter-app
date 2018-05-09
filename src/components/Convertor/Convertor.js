import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchData } from "../../actions/fetchData";
import { convertСurrency } from "../../logic";
import TextField from "material-ui/TextField";
import Button from "material-ui/Button";
import { withStyles } from "material-ui";
import { styles } from "./StylesConvertor";
import { compose } from "redux";
import { InputLabel } from "material-ui/Input";
import { FormControl } from "material-ui/Form";
import Select from "material-ui/Select";

class Convertor extends Component {
  state = {
    icomingDataRate: null,
    outputDataRate: null,
    outputDataInitials: "",
    amount: null
  };

  componentDidMount() {
    this.props.fetchData();
  }

  handelIcomingData = e => {
    const id = e.target.value;
    const result = this.props.data.nbu_data.find(el => id == el.r030);
    if (result) {
      this.setState({
        icomingDataRate: result.rate
      });
    } else {
      this.setState({
        icomingDataRate: null
      });
    }
  };

  handelOutputData = e => {
    const id = e.target.value;
    const result = this.props.data.nbu_data.find(el => id == el.r030);
    if (result) {
      this.setState({
        outputDataRate: result.rate,
        outputDataInitials: result.cc
      });
    } else {
      this.setState({
        outputDataRate: null
      });
    }
  };

  handelInputData = e => {
    this.setState({ amount: Number(e.target.value) });
  };

  handelSubmit = e => {
    const sendData = {
      icomingDataRate: this.state.icomingDataRate,
      outputDataRate: this.state.outputDataRate,
      outputDataInitials: this.state.outputDataInitials,
      amount: this.state.amount
    };
    this.props.convertСurrency(sendData);
  };

  checkIsEnabled = () => {
    const { icomingDataRate, outputDataRate, amount } = this.state;
    const enabled = icomingDataRate > 0 && outputDataRate > 0 && amount > 0;
    return enabled;
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.convertWrap}>
          <TextField
            label="Amount"
            onChange={this.handelInputData}
            type="number"
            className={classes.textField}
            margin="normal"
          />
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="age-native-simple">From</InputLabel>
            <Select native onChange={this.handelIcomingData}>
              <option value="" />
              {this.props.data.nbu_data.map((item, key) => (
                <option key={key} value={item.r030}>
                  {item.cc} - {item.txt}
                </option>
              ))}
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="age-native-simple">To</InputLabel>
            <Select native onChange={this.handelOutputData}>
              <option value="" />
              {this.props.data.nbu_data.map((item, key) => (
                <option key={key} value={item.r030}>
                  {item.cc} - {item.txt}
                </option>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className={classes.buttonWrap}>
          <Button
            onClick={this.handelSubmit}
            variant="raised"
            disabled={!this.checkIsEnabled()}
            className={classes.button}
          >
            Convert
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.fetchData
  };
};

export default compose(
  withStyles(styles),
  connect(mapStateToProps, { fetchData, convertСurrency })
)(Convertor);
