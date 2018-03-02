import * as React from 'react';

interface State {
  value: string;
}
interface Props {
  data: { id: number, description: string }[];
  owner: React.Component;
  deleteSelectItem: (id: number) => void;
}

export default class DitSelectComponent extends React.Component {
  public state: State;
  public props: Props;
  private shouldUpdate: boolean = false;

  constructor(props: Props) {
    super(props);

    this.state = { value: this.props.data[0].id.toString() };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    this.setState({ value: e.target.value });
  }

  handleClick() {
    this.props.deleteSelectItem(parseInt(this.state.value, 10));

    this.shouldUpdate = true;
  }

  componentDidUpdate() {
    if (this.props.data.length) {
      this.setState({ value: this.props.data[0].id.toString() });

      this.shouldUpdate = false;
    }
  }

  shouldComponentUpdate() {
    return this.shouldUpdate;
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
