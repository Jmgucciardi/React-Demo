import React, { Component } from 'react';

class ExampleOne extends Component {
  render() {
    return (
      <div>
        <div>
          <p> Example One Component </p>
          <div>
            {this.props.isHidden ?
              <div>
                <h3> CONTENT IF {this.props.isHiddenString}</h3>
                <p> Now You See Me </p>
              </div>
              :
              <div>
                <h3> CONTENT IF {this.props.isHiddenString}</h3>
                <p> Now You Don't </p>
              </div>
            }
          </div>
        </div>
      </div>
    )
  }
}

export default ExampleOne;