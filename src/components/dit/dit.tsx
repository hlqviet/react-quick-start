import * as React from 'react';
import List from '../list/list';
import DitInput from '../dit-input/dit-input';
import DitSelect from '../dit-select/dit-select';

import { ditCharacteristics } from '../../data/data';

interface State {
  ditCharacteristics: { id: number, description: string }[];
  owner: React.Component;
}
interface Props { }

export default class DitComponent extends React.Component {
  public state: State;

  constructor(props: Props) {
    super(props);

    this.state = { ditCharacteristics, owner: this };

    this.addSelectItem = this.addSelectItem.bind(this);
    this.deleteSelectItem = this.deleteSelectItem.bind(this);
  }

  addSelectItem(description: string) {
    const chars = this.state.ditCharacteristics;

    chars.push({
      id: chars.length ? chars[chars.length - 1].id + 1 : 1,
      description
    });

    this.setState({ ditCharacteristics: chars });
  }

  deleteSelectItem(id: number) {
    const chars = this.state.ditCharacteristics.filter(item => item.id !== id);

    this.setState({
      ditCharacteristics: chars
    });
  }

  render(): JSX.Element {
    return (
      <div>
        <List data={this.state.ditCharacteristics} />
        <DitInput data={this.state.ditCharacteristics} owner={this} addSelectItem={this.addSelectItem} />
        <DitSelect data={this.state.ditCharacteristics} owner={this} deleteSelectItem={this.deleteSelectItem} />
      </div>
    );
  }
}
