import * as React from 'react';

interface Props {
  isToggleOn: boolean;
}

export default function LogicalComponent(props: Props) {
  return props.isToggleOn ? <p>The toggle is on and the component is rendered.</p> : null;
}
