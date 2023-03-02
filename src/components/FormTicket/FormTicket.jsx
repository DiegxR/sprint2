import React, {useState} from 'react'
import Btncontainer from '../Btncontainer/Btncontainer'
import DateFlight from '../DateFlight/DateFlight'
import Flight from '../Fligth/Flight'
import Passengers from '../Passengers/Passengers'
import TypeFligth from '../TypeFlight/TypeFlight'
import plane from '../../assets/icons/plane.svg'
import './styles.scss'
import { useNavigate } from 'react-router-dom'
import { getDataForm, setDataForm } from '../Services/LocalStorage'
import Swal from 'sweetalert2'
const FormTicket = () => {
    const [type, setType] = useState(true)
    const [form, setForm] = useState(getDataForm())
    
    const handleClick = () =>{
        setType(!type)
    }
    const navigate = useNavigate()
    
    const handleSubmit = (e) =>{
      e.preventDefault();
      if(!form.Origen){
        Swal.fire({
          icon: 'error',
          title: 'Ingrese un lugar de Origen de su viaje',
        })
      }else if(!form.Destino){
        Swal.fire({
          icon: 'error',
          title: 'Ingrese el Destino de su viaje',
        })
      }else if(!form.Salida){
        Swal.fire({
          icon: 'error',
          title: 'Ingrese la fecha de salida',
        })
      }else if(!form.passengers){
        Swal.fire({
          icon: 'error',
          title: 'Ingrese el número de pasajeros',
        })
      }else{
        navigate('/flightInfo/hours&luggage')
        setDataForm(form)
      }
    }
    
    const handleChange = (name, value) =>{
      const data = {
        ...form,
        [name]: value
      }
      setForm(data)
    }
  
  return (
    <form className='form'>
        <h1 className='form__title'>Busca un nuevo destino y comienza la aventura</h1>
        <p className='form__info'>Descuber vuelos al mejor precio y perfectos para cualquier viaje</p>
    <Btncontainer type={'type'}>
    <TypeFligth onClick={handleClick} active={type}>Viaje redondo</TypeFligth>
    <TypeFligth onClick={handleClick} active={!type}>Viaje sencillo</TypeFligth>
    
    </Btncontainer>
    <div className='form__inputs'>
    <Btncontainer type='flight-select'>
    <Flight type='Origen' handleChange={handleChange} value={form?.Origen }/>
    </Btncontainer>
    <Btncontainer type='flight-select'>
    <Flight type='Destino' handleChange={handleChange} value={form?.Destino}/>
    </Btncontainer>
    <Btncontainer type='info-flight'>
      <DateFlight type='Salida' handleChange={handleChange} active={true} value={form?.Salida}/>
    </Btncontainer>
    <Btncontainer type='info-flight'>
      <DateFlight type='Regreso' handleChange={handleChange} active={type} value={form?.Regreso}/> 
    </Btncontainer>
    <Btncontainer type='info-flight'>
      <Passengers handleChange={handleChange} value={form.passengers}/>
    </Btncontainer>
    <Btncontainer>
       
    </Btncontainer>
    </div>
    <button onClick={e => handleSubmit(e)} className='button'><img src={plane} alt="" /> Buscar vuelos</button>
    </form>
  )
}

export default FormTicket