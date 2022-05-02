import React from 'react'

const Tile = ({ children, onToggle, isSet }) => {
  return (
    <div onClick={onToggle} className={`tile ${isSet ? 'tile--set' : ''}`}>
      {children}
    </div>
  )
}

export default Tile
