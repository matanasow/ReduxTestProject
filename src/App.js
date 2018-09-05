import React, { Component, Fragment } from 'react';
import Login from './components/Login'
import Navbar from './components/Navbar'
import Menu from './components/Menu'
import Content from './components/Content'
import Routes from './routes'
import compose from './helpers/compose';
import { connect } from 'react-redux';

class App extends Component {
  state = {
    sessionId: null
  }

  login = (param) => {
    debugger
    this.setState({
      sessionId: param
    });
    localStorage.setItem('sessionId', param)
  }

  logout = () => {
    debugger
    this.setState({
      sessionId: null
    });
  }

  render() {
    if (this.props.sessionId === null) return <Login login={this.login} />;
    return (

      <Fragment>
        <Navbar logoutUser={this.logout} />
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
    ({ login: { sessionId } }) => ({ sessionId })
  )
)(App);
