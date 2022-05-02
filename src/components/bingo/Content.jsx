import React from 'react'

const Content = ({ children, reference }) => {
  return (
    <div ref={reference} className="content  fade-in">
      {children}
    </div>
  )
}

export default Content
