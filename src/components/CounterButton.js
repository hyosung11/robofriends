import React, { Component } from 'react';

class CounterButton extends Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
  }

  updateCount = () => {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    console.log('CounterButton');
    return (
      <button color={this.props.color} onClick={this.updateCount}>
        Count: {this.state.count}
      </button>
    )
  }
}

export default CounterButton;
