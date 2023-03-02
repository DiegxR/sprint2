import React from 'react'
import './styles.scss'
const Btncontainer = ({type, children}) => {
  return (
    <div className={type}>{children}</div>
  )
}

export default Btncontainer