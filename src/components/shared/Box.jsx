import React from 'react'

import '../../styles/boxes.scss'

const Box = ({ children, classNames }) => {
  return <div className={classNames}>{children}</div>
}

export default Box
