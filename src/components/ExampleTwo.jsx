import React from 'react'

const ExampleTwo = (props) => {
  return (
    <div>
      <p>Example Two</p>
      {props.data.map((item, i) => {
        return (
          <div key={i} style={{display: 'inline'}}>
            <button
              onClick={props.handleClick.bind(this, i)}
            >
              {item}
            </button>
          </div>
        )
      })}
    </div>
  )
};

export default ExampleTwo