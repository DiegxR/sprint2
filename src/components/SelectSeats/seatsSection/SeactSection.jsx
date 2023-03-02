import React, { useContext, useEffect } from 'react'
import Aisle from '../Aisle/Aisle'
import { PlaneContext } from '../SelectSeats'
import './styles.scss'
const SeactSection = () => {
    const { colums, sec} = useContext(PlaneContext)
    const letters = [
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"
    ]
    letters.splice((colums),0, "")
   
    
  return (
    <section className=''>
        {[...Array(sec)].map((_, ind)=>(
            <section key={ind} className='secBlock'>
               {letters.map((letter, index)=>(
                index < colums ? 
                <Aisle key={index} sec={ind+1}  vocals={letter}/>
                :(index === colums ?  <Aisle key={index} sec={ind+1}  type='aisle' /> :
                (index <= colums*2 ? <Aisle key={index} sec={ind+1} vocals={letter}/> : '') 
                )
               ))}
            </section>
        ))}
    </section>
  )
}

export default SeactSection