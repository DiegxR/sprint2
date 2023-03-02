import React, { useContext } from 'react'
import { PlaneContext } from '../SelectSeats'
import './styles.scss'

const Seat = ({ type, children, id }) => {
  const { handleClick, click} = useContext(PlaneContext)
  

  const handleVerif = (e) => {
    if (type !== 'colums' && type !== 'ocupado') {
      handleClick(e)
    }
  }

  const handleSelected = (id) => {
    if (click.includes(id)) {
      return 'selected'
    }
  }
  
  
 

  
  return (
    <figure id={id} onClick={e => handleVerif(e)} className={`icon__seat ${type} ${handleSelected(id)}`}>
      {children ? children : (handleSelected(id) == 'selected'? (click.indexOf(id)+1) : '')}
    </figure>
  )
}

export default Seat