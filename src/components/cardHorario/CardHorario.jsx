import React from 'react'
import "./styles.scss"
import line from '../../assets/icons/line.jpeg'
import IconEquipaje from '../iconEquipaje/IconEquipaje'

export const CardHorario = ({horaSalida, horaLlegada, handleClick, click, index, prices}) => {
    
    return (
        <article className='secHour'>
            <section className='secHour__time'>
                <h2>{horaSalida}</h2>
                <div>
                    <p>1h:57min</p>
                    <img src={line} alt="line" />
                    <p>sin escaleras</p>
                </div>
                <h2>{horaLlegada}</h2>
            </section>
            <section className='secHour__icon'>
                {prices.map((element, ind)=>(
                     <IconEquipaje 
                     key={ind}
                     type={element.type} 
                     name={`${element.id}${index}`} 
                     active={click}
                     price={`$${element.price} COP`}
                     handleClick={handleClick}/>
                ))}
               
            </section>
        </article>
    )
}
