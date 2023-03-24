import React, { Component } from 'react'

export class UserGuest extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isloggedin :true
      }
    }
    
  render() {
    if(this.state.isloggedin) {
            return <div>welcome guest</div>
    }
    else{
        return <div>welcome benokorie</div>
    }
    return (
      <div>
        
      </div>
    )
  }
}

export default UserGuest
