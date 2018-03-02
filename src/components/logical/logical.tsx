import * as React from 'react';

interface LogicalComponentProps {
  isToggleOn: boolean;
}

export default class LogicalComponent extends React.Component {
  public props: LogicalComponentProps;

  constructor(props: LogicalComponentProps) {
    super(props);
  }

  render() {
    return this.props.isToggleOn ? (
      <p>The toggle is on and the component is rendered.</p>
    ) : null;
  }
}
