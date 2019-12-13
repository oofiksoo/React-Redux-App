import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import { getAccount } from "../actions";

const Account = props => {
  return (
    <div>
      <h3> Account Info: </h3>
      {!props.account && !props.isFetching && (
        <p> Check your Account Credits </p>
      )}{" "}
      {props.isFetching && (
        <Loader type="Puff" color="#00BFFF" height={100} width={100} />
      )}{" "}
      {props.account && <p> {props.account} </p>}
      <button onClick={props.getAccount}> Get Account Info </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    account: state.joke,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { getAccount })(Account);
