import React, { Component, Fragment } from 'react';
import Login from './components/Login'
import Navbar from './components/Navbar'
import Menu from './components/Menu'
import Content from './components/Content'
import Routes from './routes'
import compose from './helpers/compose';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';

// class TextBox extends Component {
//   render() {
//     return (
//       <input type={this.type} />
//     )
//   }
// }

// class InputTextBox extends TextBox {
//   type = 'text'
// }

// const TextBox = (props) => {
  
//   return <input {...props} />
// }

// const PassTextBox = () => {
//   return <TextBox type="password" />
// }

// const InputTextBox = () => {
//   return <TextBox type="input" />
// }

// const BtnTextBox = () => {
//   return <TextBox type="button" />
// }

class App extends Component {
  state = {
    sessionId: null
  }

  executeLogin = (param) => {
    this.setState({
      sessionId: param
    });
  }
  
  logout = () => {
    debugger
    this.setState({
      sessionId: null
    });
  }
  
  render() {
    if (this.props.sessionId === null || undefined) return <Login executeLogin={this.executeLogin} />;
    return (
      <Fragment>
        <Navbar executeLogout={this.logout} />
        <Menu />
        <Content>
          <Routes />
        </Content>
      </Fragment>
    );
  }
}

// export default App;

export default compose(
  connect(
    ({ session: { sessionId } }) => ({ sessionId })
  )
)(App);
