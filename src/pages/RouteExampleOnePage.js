import React, { Component } from 'react'

import ExampleOne from "../components/ExampleOne";

class RouteExampleOnePage extends Component {
  state = {
    isHidden: false,
    isHiddenString: 'FALSE'
  };

  handleClick = () => {
    let isHidden = !this.state.isHidden;
    let isHiddenString = '';
    this.state.isHiddenString === 'FALSE' ?
      isHiddenString = ' TRUE' : isHiddenString = 'FALSE';
    this.setState({
      isHidden: isHidden,
      isHiddenString
    })
  };

  render() {
    return (
      <div>
        <h1> ROUTE EXAMPLE ONE </h1>
        <ExampleOne
          isHidden={this.state.isHidden}
          isHiddenString={this.state.isHiddenString}
        />
        <button
          onClick={this.handleClick}
        >
          Is Hidden
        </button>
      </div>
    )
  }
}

export default RouteExampleOnePage