import * as React from 'react';
import Logo from '../logo/Logo';

export default class HeaderComponent extends React.Component {
  render() {
    return (
      <header className="App-header">
        <Logo />
        <h1 className="App-title">Welcome to React</h1>
      </header>
    );
  }
}
