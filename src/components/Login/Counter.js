import React from 'react';
import { connect } from  'react-redux';


class Counter extends React.Component {
  state = { count: 0 }

  increment = () => {

  }

  decrement = () => {
    
  }

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span className="count">{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    count: state.count
})

export default connect(mapStateToProps)(Counter);