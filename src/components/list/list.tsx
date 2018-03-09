import * as React from 'react';
import ListItem from '../list-item/list-item';

interface Props {
  data: { id: number, description: string }[];
}

export default function ListComponent(props: Props) {
  return (
    <>
      <h3>Đặc điểm của Khánh</h3>
      <ul>
        {props.data.map(item => (
          <ListItem key={item.id} description={item.description} />
        ))}
      </ul>
    </>
  );
}
