import { combineReducers } from 'redux';
import session from './session';
import data from './data'

export default combineReducers({
  session,
  data
});
// const bpa = [{id:1},{id:2},{id:3},{id:4}];

// const bbb = bpa.reduce((acc, curr) => {
//   //acc[curr.id] = 10;  
//   const ddd = {
//     ...acc,
//     [curr.id]: 10
//   };
//   console.log(ddd);
//   return ddd;
// }, {});

// console.log(bbb);

// const bla1 = {
//   a: 1,
//   b: 2,
//   c: {
//     c1: 11,
//     c2: 22
//   }
// };

// const bla2 = {
//   ...bla1,
  
// };

// bla1.c.c1 = 55;

// console.log(bla2);