import React, { Component } from 'react'

export class Formation extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      text: '',
      topic:'react'

    }
  }
  formhandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  commentshandler = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  topichandler =(event) => {
    this.setState({
      topic: event.target.prevent
    })
  }
  render() {
    return (
      <form onSubmit={this.handlesubmit}>
        <div>
          <label>username</label>
          <input type="text" value={this.state.username} onChange={this.formhandler} />
        </div>
        <div>
          <label>comments</label>
          <textarea value={this.state.text} onChange={this.commentshandler}></textarea>
        </div>
        <div>
          <label>topic</label>
          <select value={this.state.topic} onChange={this.topichandler}>  
            <option value="FK">Falkland Islands (Malvinas)</option>
            <option value="FO">Faroe Islands</option>
            <option value="FJ">Fiji</option>
            <option value="FI">Finland</option>
            <option value="FR">France</option>
            <option value="GF">French Guiana</option>
          </select>
        </div>
        <div>
          <button >submit</button>
        </div>
      </form>
    )
  }
}

export default Formation
