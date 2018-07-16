import React, { Component } from 'react';
import './index.css';
import ActiveRouteLink from '../../helpers/ActiveRouteLink';

const leftMenuItems = ['left-1'];
const rightMenuItems = ['right-1', 'right-2'];

class Navbar extends Component {

  toggleMenu = (ev) => {
    ev.target.classList.toggle('is-active');
    this.menuItem.classList.toggle('is-active');
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
                <a className="navbar-item is-active" onClick={this.props.executeLogout}>logout</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
