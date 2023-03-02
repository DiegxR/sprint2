import React, { createContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import SeactSection from './seatsSection/SeactSection'
import './styles.scss'

export const PlaneContext = createContext({})
const SelectSeats = ({ vuelo, date, origen, destino, persons, asientos, flight}) => {
  console.log(flight[origen].normal)
  const [plane, setPlane] = useState(flight[origen].normal)
 const [ocupados, setocupados] = useState(plane.seats.disables[0])
 const [numSeats, setnumSeats] = useState(plane.size.seats) 
 const [colums, setcolums] = useState(plane.size.colums) 
 const [sec, setSec] = useState(plane.size.sec) 
 const [click, setclick] = useState([])
 const [pasajeros, setPasajeros] = useState(persons)
 const [counter, setCounter] = useState(1)
 

 const navigate = useNavigate();
 const handleBack = () =>{
  navigate('/flightInfo/hours&luggage')
 }
  const handleClick = ({target}) =>{
    if (click.length < pasajeros) {
      setclick([
        ...click,
        target.id
      ])
      setCounter(counter+1)
    }else if(target.classList.contains('selected')){
        const ind = click.indexOf(target.id)
        let array = click
        array.splice(ind, 1, '')
        setclick([
          ...array
        ])
    } else{
      let replaceArray = click
      let indx = click.indexOf('')
      replaceArray.splice(indx, 1, target.id)
      setclick([...replaceArray]) 
    }
  }

  useEffect(() => {
    asientos(click)
  }, [click])
 
  return (
    <>
    <section className='secHorario'>
        <article className='secHorario__text'>
            <h2>Vuelo de {vuelo}</h2>
            <h2>{date}</h2>
            <p className='ptext1'>{`${origen} a ${destino}`}</p>
            <h4>Selecciona tu asiento</h4>
        </article>
        <article onClick={()=> handleBack()} className='secHorario__button'><button >Cambiar vuelo</button></article>
    </section>
    <section className='secPlane'>
        <article>
        <PlaneContext.Provider value={{numSeats, colums, sec, handleClick, ocupados, click, pasajeros, counter }}>
         <SeactSection  />
        </PlaneContext.Provider>
        </article>
    </section>
    </>
  )
}

export default SelectSeats