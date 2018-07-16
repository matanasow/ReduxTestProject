import React, { Fragment } from 'react';

// export const withHeader = (header) => (Component) => (props) => {
//   return (
//     <Fragment>
//       <div className="is-header has-shadows">{header}</div>
//       <Component {...props} />
//     </Fragment>
//   );
// }

const Header = ({ children }) => <div className="is-header has-shadows">{children}</div>;

export default Header;
