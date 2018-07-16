import React, { Component } from 'react';
import './index.css';
import ActiveRouteLink from '../../helpers/ActiveRouteLink';
import { menuItems } from '../../data/menuItems';

class Menu extends Component {
  render() {
    return (
      <aside className="menu has-shadows">
        <ul className="menu-list">
          {
            menuItems.map((menuItem) => {
              return (
                <li key={menuItem.id} className={`has-border-${menuItem.color}`}>
                  <ActiveRouteLink to={`/${menuItem.desc}`}>
                    <div className="menu-icon"><span className="icon"><i className={`fas fa-${menuItem.icon}`}></i></span></div>
                    <div className="menu-text transitioned">{menuItem.desc}</div>
                  </ActiveRouteLink>
                </li>
              );
            })
          }
        </ul>
      </aside>
    );
  }
}

export default Menu;
