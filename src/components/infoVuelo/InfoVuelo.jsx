import React, { useEffect, useState } from 'react'
import Facturación from '../facturazión/Facturación';
import HorariosDisponibles from '../horariosDisponibles/HorariosDisponibles';
import './styles.scss';
import { getDataForm, setDataForm } from '../Services/LocalStorage';
import { useNavigate, useParams } from 'react-router-dom';
import SelectSeats from '../SelectSeats/SelectSeats';
import { getFlight } from '../Services/getData';

const InfoVuelo = () => {
  const [hours, setHours] = useState({})
  const [price, setPrice] = useState({})
  const [validate, setValidate] = useState(false)
  const [persons, setPersons] = useState()
  const [asientosSalida, setAsientosSalida] = useState([])
  const [asientosRegreso, setAsientosRegreso] = useState([])
  const [validateAsientos, setvalidateAsientos] = useState(false)
  const [flight, setFlight] = useState({})
  const { step } = useParams()
  const data = getDataForm()
  const navigate = useNavigate()
  const handlePrice = (name,prices) =>{
    setPrice({
      ...price,
      [name]: prices
    })
  }
  const handleHour = (name,hour) =>{
    setHours({
      ...hours,
      [name]: hour
    })
  }

  const handlePay = (total) =>{
    const info = { 
      ...data,
      seatsSalida: asientosSalida, seatsRegreso: asientosRegreso, hours : hours,total: total, price: price
    }
     setDataForm(info)
     navigate('/formulario')
  }
  useEffect(() => {
   if(data.Regreso){
    if(asientosSalida.length == persons && asientosRegreso.length == persons){
      setvalidateAsientos(true)
    }
   }else{
    if(asientosSalida.length == persons){
      setvalidateAsientos(true)
    }
   }
  }, [asientosSalida, asientosRegreso])
  
  useEffect(() => {
    getFlight(data.Origen, data.Destino).then(
      (res)=> setFlight(res)
    )
  }, [])
  
  useEffect(() => {
    if(data.Regreso){
      if(hours.Regreso){
        setValidate(true)
      }
    }else if(hours.Salida){
      setValidate(true)
    }
  }, [hours])

  return (
    <section className='secInfoVuelo'>
        {step === 'hours&luggage' ? <section className='secInfoVuelo__vuelos'>
        
        <HorariosDisponibles 
        date={data.Salida} 
        vuelo='Salida' 
        origen={data.Origen} 
        destino={data.Destino}
        handleHour={handleHour}
        handlePrice={handlePrice}
        />
        {data.Regreso !== '' ? 
        <HorariosDisponibles 
        date={data.Regreso} 
        vuelo='Regreso' 
        origen={data.Destino} 
        destino={data.Origen}
        handleHour={handleHour}
        handlePrice={handlePrice} />  
        : ''}
        </section> : 
        (step === 'seats' ?
        Object.entries(flight).length !== 0 ?
        (<div className='secSeats'>
         <section className='secInfoVuelo__vuelos'>
           <SelectSeats vuelo='Salida' origen={data.Origen} 
           destino={data.Destino}  persons={persons} asientos={setAsientosSalida} 
           flight={flight}/>
         </section>
         <section className='secInfoVuelo__vuelos'>
         {data.Regreso !== '' ? 
        <SelectSeats vuelo='Regreso' origen={data.Destino} persons={persons}
        destino={data.Origen} asientos={setAsientosRegreso} flight={flight}/> 

         : ''}
         </section>
        </div>) : ''
        : '')}
        <section className='secInfoVuelo__fact'>

        <Facturación 
        origen={data.Origen} 
        destino={data.Destino} 
        hOrigenSalida={hours.Salida ? hours.Salida.salida : '-'}
        hDestinoSalida={hours.Salida ? hours.Salida.llegada : '-'}
        hOrigenRegreso={hours.Regreso ? hours.Regreso.salida : '-'}
        hDestinoRegreso={hours.Regreso ? hours.Regreso.llegada : '-'}
        date={{"salida": data.Salida, "regreso": data.Regreso? data.Regreso : '' }}
        pasajeros={data.passengers}
        price={price}
        validate={validate}
        setPasajeros={setPersons}
        asientos={validateAsientos}
        handlePay={handlePay}
        />

        </section>
    </section>
  )
}

export default InfoVuelo