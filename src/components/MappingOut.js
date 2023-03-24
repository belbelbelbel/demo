import React from 'react'

function MappingOut() {
    const names = ['ronald','belonwu','chiagozie']
    const namelist = names.map(namee => <h2>{namee}</h2> )
  return (
    <div>
     {namelist}
     
    </div>
  )
}

export default MappingOut
