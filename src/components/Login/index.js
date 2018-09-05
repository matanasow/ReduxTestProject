import React, { Component } from "react";
import { connect } from 'react-redux';
import { loginUser } from './../../redux/actions/login';
import "./index.css";

class Login extends Component {

  state = {
    email: "",
    password: "",
    error: null
  };

  hashingParam = param => {
    let Hashes = require("jshashes");
    let MD5Hash = String(param);
    const MD5_hash = new Hashes.MD5();
    for (let index = 0; index < 1000; index++) {
      MD5Hash = MD5_hash.hex(MD5Hash);
    }
    const separateHash = MD5Hash.match(/.{1,8}/g);
    return (
      "0x" +
      separateHash[1] +
      separateHash[0] +
      separateHash[3] +
      separateHash[2]
    );
  };

  login = event => {
    event.preventDefault();
    const userHashPass = this.hashingParam(this.state.password);
    this.props.loginUser({email: this.state.email, password: this.state.password})
  };

  handleEmailChange = event => {
    this.setState({ email: event.target.value });
  };
  handlePassChange = event => {
    this.setState({ password: event.target.value });
  };

  render() {
    const error = this.props.error;
    return (
      <div className="is-login has-shadows">
        <div className="field">
          <p className="control has-icons-left has-icons-right">
            <input
              className="input transitioned"
              type="email"
              placeholder="username"
              value={this.state.email}
              onChange={this.handleEmailChange}
              autoFocus
            />
            <span className="icon is-small is-left">
              <i className="fas fa-user" />
            </span>
            {/* <span className="icon is-small is-right">
              <i className="fas fa-check" />
            </span> */}
          </p>
        </div>
        <div className="field">
          <p className="control has-icons-left">
            <input
              className="input transitioned"
              type="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.handlePassChange}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-lock" />
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control">
            <button            
              className="button is-link is-fullwidth transitioned"
              onClick={this.login}
            >
            <i className="fa fa-spinner fa-spin"></i>
              Login
            </button>
          </p>
        </div>
        {error !== null && (
          <div className="field">
            <span className="has-text-danger">{error.message}</span>
          </div>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: ({email, password}) => dispatch(loginUser({email,password}))
  };
};

export default connect(
  (state) => {
    return {
      sessionId: state.sessionId,
      userId: state.login.userId,
      error: state.login.error
    };
  },
  mapDispatchToProps
)(Login);


