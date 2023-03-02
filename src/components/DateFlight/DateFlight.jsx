import React, {useState, useEffect} from 'react'
import calendarImg from '../../assets/icons/calendar.svg'
import { Calendar } from 'react-date-range'
import x from '../../assets/icons/x.svg'
import './styles.scss'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
const DateFlight = ({type, handleChange, active, value}) => {
    const [click, setClick] = useState(false)
    const [date, setDate] = useState('')
     
    
    const handleChangeDate = (e) =>{
        setDate(e.toLocaleDateString('es-ES', {weekday: 'long',day: 'numeric', month: 'short', year: 'numeric'}))
    }
    useEffect(() => {
      if(active){
        handleChange(type, date)
      }else{
        handleChange(type, '')
      }
    }, [date, active])
    
  return (
    <>{active ? <section onClick={()=> setClick(!click)} className='openCalendar'>
    <img src={calendarImg} alt="" />
    <div className='dateInfo'>
        <p>{type}</p>
        <h4>{value === '' ? date : value}</h4>
    </div>
    </section> : '' }
    
    {click ? 
    <div className='modal'>
        <section className="calendarContainer">
         <div className='head'>
            <h2>Seleciona la fecha de {type}</h2>
            <img src={x} onClick={()=>setClick(!click)}/>
        </div>   
        <Calendar  date={new Date()} onChange={(e)=> handleChangeDate(e)} local="es-ES"/> 
        <button className='btnDate' onClick={(e)=> date !== '' ? setClick(!click) : e.preventDefault() }>Hecho</button>
        </section>
    </div>
    : ''}
    </>
  )
}

export default DateFlight