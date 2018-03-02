import * as React from 'react';

const logo = require('./logo.svg');

export default class LogoComponent extends React.Component {
  render() {
    return <img src={logo} className="App-logo" alt="logo" />;
  }
}
