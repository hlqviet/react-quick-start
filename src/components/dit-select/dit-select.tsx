import * as React from 'react';

interface State {
  value: string;
}
interface Props {
  data: { id: number, description: string }[];
  deleteSelectItem: () => void;
  selectedId: number;
  updateSelectedId: (selectedId: number) => void;
}

export default class DitSelectComponent extends React.PureComponent {
  public state: State;
  public props: Props;

  constructor(props: Props) {
    super(props);

    this.state = { value: this.props.data[0].id.toString() };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    this.props.updateSelectedId(parseInt(e.target.value, 10));
  }

  handleClick() {
    this.props.deleteSelectItem();
  }

  render() {
    return (
      <div>
        <select value={this.props.selectedId} onChange={this.handleChange}>
          {this.props.data.map(item =>
            <option key={item.id} value={item.id}>{item.description}</option>)}
        </select>
        <button onClick={this.handleClick}>Xóa</button>
      </div>
    );
  }
}
