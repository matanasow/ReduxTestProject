import React, { Component } from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import Modal from '../../../helpers/Modal';

const moduleUrl = "/dashboard";

const DashboardItem = () => {
  return (
    <div>single item in a modal window</div>
  );
}

class Dashboard extends Component {
  render() {
    const { id } = this.props.match.params;
    return (
      <div className="is-dashboard">
        {id &&
          <Modal closeUrl={moduleUrl}>
            <DashboardItem />
          </Modal>
        }
        <div className="columns is-multiline">
          <div className="column is-one-quarter-widescreen is-one-third-desktop is-half-tablet">
            1
          </div>
          <div className="column is-one-quarter-widescreen is-one-third-desktop is-half-tablet">
            2
          </div>
          <div className="column">
            <Link to={`${moduleUrl}/modal`}>modal</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
