import React, { Component } from 'react'

export class ClickClass extends Component {
    changehandle() {
        console.log("live the life")
    }
  render() {
    return (
      <div>
        <button onClick={this.changehandle}>Click</button>
      </div>
    )
  }
}

export default ClickClass;
