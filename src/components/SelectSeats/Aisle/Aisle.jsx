import React, { useContext, useState, useEffect } from 'react'
import Seat from '../Seat/Seat'
import { PlaneContext } from '../SelectSeats'
import './styles.scss'
const Aisle = ({ vocals , sec, type}) => {
    const {numSeats, ocupados} = useContext(PlaneContext)
    
    const handleAvailable = (sec, id1, id2) =>{
        let count = 0
        if(sec === 1 && ocupados.includes(id1)){
            return 'ocupado'
        }else if(sec !== 1 && ocupados.includes(id2)){
            return 'ocupado'
        }else{
            return 'available'
        }
    }

  return (
    <section className='secAisle'>
        <section className='secAisle__header'>
            {sec === 1 ? <Seat type='colums'>{sec === 1 ? vocals : ''}</Seat> : ''}
        </section>

        <section className='secAisle__aisle'>
        {[...Array(numSeats)].map((_, index)=>(
            type !== 'aisle' ? <Seat key={index} id={sec === 1 ? `${index+1}${vocals}${sec}` : `${index+(numSeats+1)}${vocals}${sec}`} 
            type={ 
                handleAvailable(sec,`${index+1}${vocals}${sec}`, `${index+(numSeats+1)}${vocals}${sec}`)
            }
                /> :
            (sec === 1 ? <Seat key={index} type='colums'>{index+1}</Seat> : 
            <Seat key={index} type='colums'>{index+(numSeats+(sec > 2 ? sec+sec : 1))}</Seat>)
        ))}
        </section>

    </section>
  )
}

export default Aisle