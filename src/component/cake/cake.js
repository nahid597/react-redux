import React from "react";
import { connect } from "react-redux";
import cakeAction from "../../redux/cake/cakeAction";

function Cake(props) {
  return (
    <div>
      <h2>number of cake {props.numberOfCake} </h2>
      <button onClick={props.cake}>Decrease </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numberOfCake: state.numberOfCake,
  };
};

const mapDispatchToProps1 = (dispatch) => {
  return {
    cake: () => dispatch(cakeAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps1)(Cake);
