import React from 'react';
import Loadable from 'react-loadable';

const loading = ({ error, pastDelay }) => {
  if (error) return <div>error</div>;
  if (pastDelay) return <div>loading</div>
  return null;
};

const AsyncLoad = (opts, delay = 300) => Loadable({
  loading,
  delay,
  ...opts
});

export const Dashboard = AsyncLoad({
  loader: () => import(/* webpackChunkName: "dashboard" */ './Dashboard')
});

export const Info = AsyncLoad({
  loader: () => import(/* webpackChunkName: "info" */ './Info')
});

export const Members = AsyncLoad({
  loader: () => import(/* webpackChunkName: "members" */ './Members')
});