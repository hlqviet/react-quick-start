import * as React from 'react';

interface Props {
  description: string;
}

export default class ListItemComponent extends React.Component {
  public props: Props;

  render() {
    return <li>{this.props.description}</li>;
  }
}
