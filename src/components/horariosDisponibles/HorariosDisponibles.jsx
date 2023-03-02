import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { CardHorario } from '../cardHorario/CardHorario'
import './styles.scss'
import { validateFromTo } from '../Services/getData'

const HorariosDisponibles = ({vuelo, date, origen, destino, handleHour, handlePrice}) => {
  const [click, setClick] = useState('')
  const [hours, sethour] = useState([])
  const [prices, setprices] = useState([])
  
  useEffect(()=>{
    validateFromTo(origen, destino).then((res)=>{
      sethour(res.hours)
      setprices(res.price)
    })
  },[])
    const handleClick = ({target}) =>{
      if(target.nodeName === "FIGURE" ){
        setClick(target.id)
      }else if(target.parentNode.parentNode.nodeName === "FIGURE"){
        setClick(target.parentNode.parentNode.id)
      }
    }

    useEffect(() => {
     hours.forEach((elemet)=>{
      if(elemet.id == click.substring(1,2)){
        handleHour(vuelo,elemet)
      }
     })
     prices.forEach((element)=>{
      if(element.id == click.substring(0,1)){
        handlePrice(vuelo, element)
      }
     })
    }, [click])
    
    const navigate = useNavigate()
    const handleHome = () =>{
      navigate('/')
    }
  return (
    <>
    <section className='secHorario'>
        <article className='secHorario__text'>
            <h2>Vuelo de {vuelo}</h2>
            <h2>{date}</h2>
            <p className='ptext1'>{`${origen} a ${destino}`}</p>
            <p className='ptext2'>Seleción de horarios y equipajes</p>
        </article>
        <article onClick={()=> handleHome()} className='secHorario__button'><button >Cambiar vuelo</button></article>
    </section>
        <section className='SecVuelos'>
          {hours.map((element, index)=>(
            <CardHorario 
            horaSalida={element.salida} 
            horaLlegada={element.llegada}
            handleClick={handleClick} 
            click={click} 
            index={element.id}
            key={index}
            prices={prices}
            />        
          ))}
        </section>
    </>
  )
}

export default HorariosDisponibles