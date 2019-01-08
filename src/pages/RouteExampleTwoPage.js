import React, { Component } from 'react'
import ExampleTwo from "../components/ExampleTwo";

class RouteExampleOnePage extends Component {
  state = {
    exampleData: [1,2,3,4,5,6,7,8,9],
    increment: true,
    buttonLabel: 'Increase +'
  };

  handleClick = (data) => {
    let exampleData = this.state.exampleData;
    let increment = this.state.increment;
    increment ? exampleData[data] += 1 : exampleData[data] -= 1;
    this.setState({
      exampleData
    })
  };

  handleChange = () => {
    let buttonLabel = this.state.buttonLabel;
    let increment = !this.state.increment;
    increment ? buttonLabel = 'Increase +' : buttonLabel = 'Decrease -';
    this.setState({
      increment,
      buttonLabel
    })
  };

  render() {
    return (
      <div>
        <h1> ROUTE EXAMPLE TWO</h1>
        <ExampleTwo data={this.state.exampleData} handleClick={this.handleClick}/>
        <button
          onClick={this.handleChange}
        >
          {this.state.buttonLabel}
        </button>

      </div>
    )
  }
}

export default RouteExampleOnePage