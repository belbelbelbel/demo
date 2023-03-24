import React, { Component } from 'react'
import ChildForm from './ChildForm'
 class ParentForm extends Component {
      constructor(props) {
        super(props)
      
        this.state = {
           parentname: "parent"
        }

        this.greetparent = this.greetparent.bind(this)
      }
      
      greetparent(childname) {
        alert(`hello  ${this.state.parentname} from ${childname}`)
      }
  render() {
    return (
      <div>
        <ChildForm Greethandler={this.greetparent}/>
      </div>
    )
  }
}

export default ParentForm
