import * as React from 'react';
import LogicalComponent from '../logical/logical';

interface Props { }
interface State {
  isToggleOn: boolean;
}

export default class ToggleButton extends React.Component {
  public state: State;

  constructor(props: Props) {
    super(props);

    this.state = { isToggleOn: false };

    this.toggle = this.toggle.bind(this);
  }

  toggle(date: Date) {
    this.setState({ isToggleOn: !this.state.isToggleOn });
    window.alert(`Button clicked at ${date.toLocaleTimeString()}.`);
  }

  render() {
    return (
      <>
        <button onClick={this.toggle.bind(this, new Date())}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
        <LogicalComponent isToggleOn={this.state.isToggleOn} />
      </>
    );
  }
}
