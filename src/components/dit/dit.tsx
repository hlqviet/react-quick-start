import * as React from 'react';
import List from '../list/list';
import DitInput from '../dit-input/dit-input';
import DitSelect from '../dit-select/dit-select';

import { ditCharacteristics } from '../../data/data';

interface State {
  ditCharacteristics: { id: number, description: string }[];
  shouldListUpdate: boolean;
}
interface Props { }

export default class DitComponent extends React.Component {
  public state: State;
  private ditSelect: DitSelect;

  constructor(props: Props) {
    super(props);

    this.state = { ditCharacteristics, shouldListUpdate: true };

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
    this.ditSelect.reSelect();
  }

  deleteSelectItem(id: number) {
    this.setState({
      ditCharacteristics: this.state.ditCharacteristics.filter(item => item.id !== id),
      shouldListUpdate: true
    });
    this.ditSelect.reSelect();
  }

  render() {
    return (
      <div>
        <List data={this.state.ditCharacteristics} />
        <DitInput
          data={this.state.ditCharacteristics}
          addSelectItem={this.addSelectItem}
        />
        <DitSelect
          ref={(ditSelect) => { if (ditSelect !== null) { this.ditSelect = ditSelect; } }}
          data={this.state.ditCharacteristics}
          deleteSelectItem={this.deleteSelectItem}
        />
      </div>
    );
  }
}
