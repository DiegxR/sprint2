import React, {useState, useEffect} from 'react'
import { useForm } from 'react-hook-form'
import { getDataForm } from '../Services/LocalStorage'
import { setReserva } from '../Services/getData'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import './styles.scss'
const Formularios = () => {
    const [localInfo, setlocalInfo] = useState(getDataForm())
    const {handleSubmit, register, formState: {errors}} = useForm()    
   useEffect(() => {
    console.log(localInfo)
   }, [])
   const navigate = useNavigate()
    const onSubmit = (values) =>{
    const data = {...localInfo, "pasajerosyPago": values}
    setReserva(localInfo.Origen, localInfo.Destino, localInfo.seatsRegreso, localInfo.seatsSalida, data)
    Swal.fire(
        'Vuelo reservado con exito',
        'success'
      )
    navigate('/')
}
  return (
    
    <div className='form-group'>
        <form className='formInfo' onSubmit={handleSubmit(onSubmit)}>
        <h1 className='mb-5'>Para terminar la transacción por favor llenar todos los datos</h1>
        {localInfo.seatsRegreso.map((item, ind)=>(
            <div key={ind} className='form-group mb-10'>
                <h3>Datos del pasajero {ind+1}</h3>
                <label className='d-flex flex-column mb-4' >
                    <span>Nombre</span>
                    <input className='form-control' type="text"  {...register(`name${ind+1}`,{
                        required: "Ingresa todos los datos de los pasajeros",
                    })}/>
                    
                    {errors[`name${ind+1}`] && <span className='text-bg-danger p-2'>{errors[`name${ind+1}`].message}</span>}
                    
                </label>
                <label className='d-flex flex-column mb-4'>
                    <span>Numero de documento</span>
                    <input className='form-control' type="text"  {...register(`documento${ind+1}`,{
                        required: "Ingresa todos los datos de los passajeros",
                    })}/>
                    
                    {errors[`documento${ind+1}`] && <span className='text-bg-danger p-2'>{errors[`documento${ind+1}`].message}</span>}
                    
                </label>
            </div>
        ))}
            <h1>Información de tarjeta</h1>
            <label className='d-flex flex-column mb-4'>
                <span>Nombre</span>
                <input placeholder='Nombre' className='form-control' type="text" {...register('NombrePago',{
                        required: "Ingrese un nombre",
                    })}/>
                    
                    {errors.NombrePago && <span className='text-bg-danger p-2'>{errors.NombrePago.message}</span>}
                    
            </label>
            <label className='d-flex flex-column mb-4'>
                <span>Número de tarjeta</span>
                <input placeholder='Número de tarjeta' className='form-control' type="text" {...register('NumeroTarjeta',{
                        required: "Ingrese un número de tarjeta",
                    })}/>
                    
                    {errors.NumeroTarjeta && <span className='text-bg-danger p-2'>{errors.NumeroTarjeta.message}</span>}
                    
            </label>
            <label className='d-flex flex-column mb-4 '>
                <span>Correo</span>
                <input placeholder='Correo Electronico' className='form-control' type="text" {...register('correo',{
                        required: "Ingrese un correo",
                    })}/>  
                    {errors.correo &&<span className='text-bg-danger p-2'>{errors.correo.message}</span>}
                    
            </label>
            <br />
            <button className='btnActionFactura m-5' type='submit'>Guardar Datos y Pagar</button>
         </form>
    </div>
  )
}

export default Formularios