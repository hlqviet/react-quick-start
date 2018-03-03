import * as React from 'react';

interface State {
  value: string;
}
interface Props {
  data: { id: number, description: string }[];
  addSelectItem: (description: string) => void;
}

export default class DitInputComponent extends React.Component {
  public state: State;
  public props: Props;

  constructor(props: Props) {
    super(props);

    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ value: e.target.value });
  }

  handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter' && this.state.value.trim()) {
      this.props.addSelectItem(this.state.value);

      this.setState({ value: '' });
    }
  }

  render() {
    return (
      <input
        type="text"
        placeholder="Nhấn Enter để thêm"
        value={this.state.value}
        onChange={this.handleChange}
        onKeyDown={this.handleKeyDown}
      />
    );
  }
}
