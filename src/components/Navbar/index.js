import React, { Component } from 'react';
import './index.css';
import { connect } from 'react-redux';
import { logoutUser } from './../../redux/actions/login';
import ActiveRouteLink from '../../helpers/ActiveRouteLink';

const leftMenuItems = ['left-1'];
const rightMenuItems = ['right-1', 'right-2'];

class Navbar extends Component {

  toggleMenu = (ev) => {
    ev.target.classList.toggle('is-active');
    this.menuItem.classList.toggle('is-active');
  }

  logoutUser = event => {
    event.preventDefault();
    this.props.logoutUser()

  }

  render() {
    return (
      <nav className="navbar is-fixed-top is-dark has-shadows" ref={(el) => { this.navItem = el; }}>
        <div className="navbar-brand">
          <ActiveRouteLink to={"/"} className="navbar-item">Home</ActiveRouteLink>
          <div className="navbar-burger burger" onClick={this.toggleMenu}>
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className="navbar-menu" ref={(el) => { this.menuItem = el; }}>
          <div className="navbar-start">
            {
              leftMenuItems.map((en, index) => <ActiveRouteLink key={index} to={`/${en}`} className="navbar-item transitioned">{en}</ActiveRouteLink>)
            }
          </div>
          <div className="navbar-end">
            {
              rightMenuItems.map((en, index) => <ActiveRouteLink key={index} to={`/${en}`} className="navbar-item transitioned">{en}</ActiveRouteLink>)
            }
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link transitioned">dadada</a>
              <div className="navbar-dropdown is-boxed is-right">
                <a className="navbar-item">profile</a>
                <a className="navbar-item">settings</a>
                <hr className="navbar-divider" />
                <a className="navbar-item is-active" onClick={this.logoutUser}>logout</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => dispatch(logoutUser())
  }
};

export default connect(
  (state) => {
    return {
      sessionId: state.sessionId
    };
  },
  mapDispatchToProps
)(Navbar);
