import * as React from 'react';

interface Props {
  item: { id: number, description: string };
  updateSelectItem: (newItem: { id: number, description: string }) => void;
}

interface State {
  isEdit: boolean;
  value: string;
}

export default class ListItemComponent extends React.Component {
  public props: Props;
  public state: State;
  private input: HTMLInputElement | null;

  constructor(props: Props) {
    super(props);

    this.state = {
      isEdit: false,
      value: this.props.item.description
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidUpdate() {
    if (this.input) { this.input.focus(); }
  }

  handleClick(e: React.MouseEvent<HTMLLIElement>) {
    this.setState({ isEdit: true });
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ value: e.target.value });
  }

  handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    switch (e.key) {
      case 'Enter':
        if (this.state.value.trim()) {
          this.props.updateSelectItem({ id: this.props.item.id, description: this.state.value });
          this.setState({ isEdit: false });
        }
        break;
      case 'Escape':
        this.setState({ isEdit: false });
        break;
      default:
    }
  }

  render() {
    const tooltip = 'Nhấn để sửa. Enter để cập nhật. Esc để hủy.';

    return this.state.isEdit
      ? (
        <li className="list-item-editing">
          <input
            className="input-field"
            title={tooltip}
            value={this.state.value}
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
            ref={(input) => this.input = input}
          />
        </li>
      )
      : (
        <li
          className="list-item"
          title={tooltip}
          onClick={this.handleClick}
        >{this.props.item.description}
        </li>
      );
  }
}
