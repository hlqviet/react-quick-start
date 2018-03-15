import * as React from 'react';

interface ClockProps { }
interface State {
  date: Date;
}

export default class ClockComponent extends React.PureComponent {
  public state: State;
  private timerId: NodeJS.Timer;

  constructor(props: ClockProps) {
    super(props);

    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    return <h2>It is {this.state.date.toLocaleTimeString()}.</h2>;
  }
}
