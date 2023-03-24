import React, { Component } from 'react'
import Input from './Input'

export class FocusInput extends Component {
    constructor(props) {
      super(props)
    
      this.componentref = React.createRef()
    }

    clickhandler=()=> {
        this.componentref.current.focusinput()
    }
    
  render() {
    return (
      <div>
        <Input ref={this.componentref}/>
        <button onClick={this.clickhandler}>focus input</button>
      </div>
    )
  }
}

export default FocusInput
