import React, { Component } from 'react'

export class Input extends Component {
    constructor(props) {
      super(props)
    
      this.inputRef = React.createRef()
       
    }
    
    focusinput() {
        this.inputRef.current.focus()
    }

  render() {
    return (
      <div>
        <input type='text'  ref={this.inputRef}></input>
      </div>
    )
  }
}

export default Input
