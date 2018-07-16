import React, { Component } from 'react';
import './index.css';

class Content extends Component {
  render() {
    return (
      <div className="is-content transitioned">
        {
          this.props.children
        }
      </div>
    );
  }
}

export default Content;
