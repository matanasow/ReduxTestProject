import React, { Component } from "react";
import { connect } from 'react-redux';
import { loginUser } from './../../redux/actions/login';
import "./index.css";

class Login extends Component {

  state = {
    email: "",
    password: "",
    errorMessage: ""
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
    debugger
    event.preventDefault();
    const userHashPass = this.hashingParam(this.state.password);
    loginUser({email: this.state.email, password: this.state.password})

    // fetch(
    //   "http://external.euroins.bg/nef4/service232/api/Users/Any?language=bg&method=Login",
    //   {
    //     method: "post",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({
    //       username: this.state.email,
    //       password: "0xa428e3fcc1f49164508bcdc08cfc7b43"
    //     })
    //   }
    // ).then(res => res.json())
    // .then(
    //   result => {
    //     this.props.setUser(result);
    //     localStorage.setItem('sessionId', result.sessionId)
    //   },
    //   error => {
    //     this.setState({
    //       errorMessage: error.ex.message
    //     })
    //   }
    // );
  };

  handleEmailChange = event => {
    this.setState({ email: event.target.value });
  };
  handlePassChange = event => {
    this.setState({ password: event.target.value });
  };

  render() {
    debugger
    // const { error } = this.props.error;
    console.log(this.state)
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
              login
            </button>
          </p>
        </div>
        {/* {error !== "" && (
          <div className="field">
            <span className="has-text-danger">{error.ex.message}</span>
          </div>
        )} */}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // setUser: (sessionId) => dispatch(setUser(sessionId)),
    loginUser: ({email, password}) => dispatch(loginUser({email,password}))
  };
};

export default connect(
  (state) => {
    return {
      sessionId: state.session.sessionId,
      email: state.email,
      error: state.session.error
    };
  },
  mapDispatchToProps
)(Login);


