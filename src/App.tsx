import * as React from 'react';
import Header from './components/header/Header';
import Hello from './components/hello/Hello';
import Clock from './components/clock/Clock';
import ToggleButton from './components/toggle-button/toggle-button';
import Dit from './components/dit/dit';

import './App.css';

export default class App extends React.Component {
  render(): JSX.Element {
    return (
      <div>
        <div className="App">
          <Header />
        </div>
        <Hello />
        <Clock />
        <ToggleButton />
        <Dit />
      </div>
    );
  }
}
