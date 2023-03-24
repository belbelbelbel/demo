import React from 'react'
import  ReactDOM  from 'react-dom'

function PortalDemo() {
  return  ReactDOM.createPortal(
    <div>
      <h1>PORTAL DEMOS</h1>
    </div>,
    document.getElementById('portal_root')
  )
}

export default PortalDemo
