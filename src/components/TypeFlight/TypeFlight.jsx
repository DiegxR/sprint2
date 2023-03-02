import React from 'react'
import './style.scss'
const TypeFlight = ({children, onClick ,active}) => {
  return (
    <p onClick={onClick} className={active ? 'active' : 'idle'}>{children}</p>
  )
}

export default TypeFlight