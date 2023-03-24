import React from 'react'

function Person({person}) {
  return (
    <div>
      <h2>
      {person.lastName}, i am a developer of {person.department} 
      </h2>
    </div>
  )
}

export default Person
