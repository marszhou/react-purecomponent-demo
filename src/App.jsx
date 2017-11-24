import React from 'react';
import TestComp from './TestComp';
import TestComp2 from './TestComp2';
import update from 'immutability-helper';
export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      p: { name: 'hello', value: 1 }
    };
  }

  handleUnpurelyClick = () => {
    const { p } = this.state;
    p.value += 1;
    this.setState({
      p
    });
  };

  handlePurelyClick = () => {
    this.setState(update(this.state, {
      p: {
        value: {
          $set: this.state.p.value + 1
        }
      }
    }))
  }

  render() {
    return (
      <div>
        TestComp(Class Component):
        <TestComp prop1={this.state.p} />
        <br />
        TestComp2(Functional Component):<TestComp2 prop1={this.state.p} />
        <button onClick={this.handleUnpurelyClick}>
          Change TestComp & TestComp2 prop1 unpurely
        </button>
        <button onClick={this.handlePurelyClick}>
          Change TestComp & TestComp2 prop1 purely
        </button>
      </div>
    );
  }
}
