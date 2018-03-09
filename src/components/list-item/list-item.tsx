import * as React from 'react';

interface Props {
  description: string;
}

export default function ListItemComponent(props: Props) {
  return <li>{props.description}</li>;
}
