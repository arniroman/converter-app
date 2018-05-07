import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchData } from '../../actions/fetchData'


class Convertor extends Component {

    componentDidMount(){
        this.props.fetchData()
    }

  render() {
      console.log(this.props.data)
    return (
      <div>
        hi
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.fetchData
  };
};

export default connect(mapStateToProps, { fetchData })(Convertor);