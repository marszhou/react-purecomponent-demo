import React from 'react';
import PropTypes from 'prop-types';
import update from 'immutability-helper';

// You can change PureComponent to Component to see the difference
export default class TestComp extends React.PureComponent {
  static propTypes = {
    prop1: PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.any
    })
  }

  static defaultProps = {
    prop1: null
  }

  constructor(props) {
    super(props);

    this.state = {
      state1: {
        name: 'state1',
        value: 1
      }
    }
  }

  handleUnpurelyClick = () => {
    // Pure Component will not render change
    const {state1} = this.state;
    state1.value += 1;
    this.setState({state1});
  }

  handlePurelyClick = () => {
    // this will work under pure mode
    this.setState(update(this.state, {
      state1: {
        value: {
          $set: this.state.state1.value + 1
        }
      }
    }))
  }

  render() {
    console.log('render');

    const { prop1 } = this.props;
    const { state1 } = this.state;
    return (
      <div>
        {
          prop1 ? `prop1: ${prop1.name} = ${prop1.value}`: 'NULL'
        }
        <br/>
        {
          state1 ? `state1: ${state1.name} = ${state1.value}` : 'NULL'
        }
        <button onClick={this.handleUnpurelyClick}>
          change state unpurely
        </button>
        <button onClick={this.handlePurelyClick}>
          change state purely
        </button>
      </div>
    )
  }
}