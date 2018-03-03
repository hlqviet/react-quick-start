import * as React from 'react';

interface State {
  value: string;
}
interface Props {
  data: { id: number, description: string }[];
  deleteSelectItem: (id: number) => void;
}

export default class DitSelectComponent extends React.Component {
  public state: State;
  public props: Props;

  constructor(props: Props) {
    super(props);

    this.state = { value: this.props.data[0].id.toString() };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.reSelect = this.reSelect.bind(this);
  }

  handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    this.setState({ value: e.target.value });
  }

  handleClick() {
    this.props.deleteSelectItem(parseInt(this.state.value, 10));
  }

  reSelect() {
    if (this.props.data.length) {
      this.setState({ value: this.props.data[0].id.toString() });
    }
  }

  render() {
    return (
      <div>
        <select value={this.state.value} onChange={this.handleChange}>
          {this.props.data.map(item =>
            <option key={item.id} value={item.id}>{item.description}</option>)}
        </select>
        <button onClick={this.handleClick}>Xóa</button>
      </div>
    );
  }
}
