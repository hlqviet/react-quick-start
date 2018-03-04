import * as React from 'react';
import Logo from '../logo/Logo';

export default class HeaderComponent extends React.Component {
  render() {
    return (
      <header className="App-header">
        <Logo />
        <h1 className="App-title">Welcome to React</h1>
        Visit my repo at <a
          className="repo"
          href="https://github.com/S-a-l-a-d/react-quick-start"
          target="_blank"
        >S-a-l-a-d/react-quick-start
        </a>
      </header>
    );
  }
}
