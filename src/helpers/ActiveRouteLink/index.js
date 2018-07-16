import React from 'react';
import { Route, Link } from 'react-router-dom';

const ActiveRouteLink = ({ to, className, children }) => {
  let path = `${to}`;
  return (
    <Route path={path} children={({ match }) => {
      let isActive = match ? ' is-active' : '';
      return <Link className={`${className}${isActive}`} to={path}>{children}</Link>;
    }} />
  );
};

export default ActiveRouteLink;
