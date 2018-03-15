import * as React from 'react';
import List from '../list/list';
import DitInput from '../dit-input/dit-input';
import DitSelect from '../dit-select/dit-select';

import { ditCharacteristics } from '../../data/data';

interface State {
  ditCharacteristics: { id: number, description: string }[];
  selectedId: number;
}
interface Props { }

export default class DitComponent extends React.PureComponent {
  public state: State;

  constructor(props: Props) {
    super(props);

    this.state = { ditCharacteristics, selectedId: ditCharacteristics[0].id };

    this.addSelectItem = this.addSelectItem.bind(this);
    this.deleteSelectItem = this.deleteSelectItem.bind(this);
    this.updateSelectedId = this.updateSelectedId.bind(this);
    this.updateSelectItem = this.updateSelectItem.bind(this);
  }

  addSelectItem(description: string) {
    let chars = this.state.ditCharacteristics;

    chars = [
      ...chars,
      { id: chars.length ? chars[chars.length - 1].id + 1 : 1, description }
    ];

    this.setState({
      ditCharacteristics: chars,
      selectedId: chars[0].id
    });
  }

  deleteSelectItem() {
    const chars = this.state.ditCharacteristics.filter(item => item.id !== this.state.selectedId);

    this.setState({ ditCharacteristics: chars });

    if (chars.length) {
      this.setState({ selectedId: chars[0].id });
    }
  }

  updateSelectedId(selectedId: number) {
    this.setState({ selectedId });
  }

  updateSelectItem(newItem: { id: number, description: string }) {
    const chars = this.state.ditCharacteristics.slice();
    const updateItem = chars.find(item => item.id === newItem.id);

    if (updateItem) {
      chars.splice(chars.indexOf(updateItem), 1, {
        id: newItem.id, description: newItem.description
      });

      this.setState({
        ditCharacteristics: chars
      });
    }
  }

  render() {
    return (
      <>
        <List
          data={this.state.ditCharacteristics}
          updateSelectItem={this.updateSelectItem}
        />
        <DitInput addSelectItem={this.addSelectItem} />
        <DitSelect
          data={this.state.ditCharacteristics}
          deleteSelectItem={this.deleteSelectItem}
          selectedId={this.state.selectedId}
          updateSelectedId={this.updateSelectedId}
        />
      </>
    );
  }
}
