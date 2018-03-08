import * as React from 'react';
import ListItem from '../list-item/list-item';

interface Props {
  data: { id: number, description: string }[];
}

export default class ListComponent extends React.Component {
  public props: Props;

  render() {
    return (
      <>
        <h3>Đặc điểm của Khánh</h3>
        <ul>
          {this.props.data.map(item => (
            <ListItem key={item.id} description={item.description} />
          ))}
        </ul>
      </>
    );
  }
}
