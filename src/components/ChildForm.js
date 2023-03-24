import React from 'react'

function ChildForm(props) {
  return (
    <div>
      <button onClick={() => props.Greethandler("child")}>greet parent</button>
    </div>
  )
}

export default ChildForm
