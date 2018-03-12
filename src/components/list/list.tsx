import * as React from 'react';
import ListItem from '../list-item/list-item';

interface Props {
  data: { id: number, description: string }[];
  updateSelectItem: (newItem: { id: number, description: string }) => void;
}

export default function ListComponent(props: Props) {
  return (
    <>
      <h3>Đặc điểm của Khánh</h3>
      <ul className="list">
        {props.data.map(item => (
          <ListItem
            key={item.id}
            item={item}
            updateSelectItem={props.updateSelectItem}
          />
        ))}
      </ul>
    </>
  );
}
