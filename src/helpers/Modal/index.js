import React from 'react';
import { Link } from 'react-router-dom';

// export const asModal = (closeUrl) => (Component) => (props) => {
//   return (
//     <div className="modal is-active">
//       <div className="modal-background" />
//       <div className="modal-card">
//         <header className="modal-card-head">
//           <p className="modal-card-title">Modal title</p>
//           <Link to={closeUrl} className="delete" aria-label="close" />
//         </header>
//         <section className="modal-card-body">
//           <Component {...props} />
//         </section>
//         <footer className="modal-card-foot">
//           <a className="button is-success">Save</a>
//           <Link to={closeUrl} className="button">Cancel</Link>
//         </footer>
//       </div>
//     </div>
//   );
// }

const Modal = ({ closeUrl, children }) => {
  return (
    <div className="modal is-active">
      <div className="modal-background" />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Modal title</p>
          <Link to={closeUrl} className="delete" aria-label="close" />
        </header>
        <section className="modal-card-body">
          {children}
        </section>
        <footer className="modal-card-foot">
          <a className="button is-success">Save</a>
          <Link to={closeUrl} className="button">Cancel</Link>
        </footer>
      </div>
    </div>
  );
};

export default Modal;
