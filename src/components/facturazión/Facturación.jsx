import React, {useEffect} from 'react'
import './styles.scss'
import icon from '../../assets/icons/minus.svg'
import { useNavigate, useParams } from 'react-router-dom'

const Facturación = ({handlePay, pasajeros, origen, destino, hOrigenSalida, hDestinoSalida, hOrigenRegreso, hDestinoRegreso, date, price, validate, setPasajeros, asientos}) => {
  const {step} = useParams()
  const passengers = (pasajeros.Adults? Number(pasajeros.Adults) : 0) + (pasajeros.Childs ? Number(pasajeros.Childs) : 0)+ (pasajeros.Babes ? Number(pasajeros.Babes) : 0);
  const total = price?.Salida ? price.Regreso ? Number(price.Salida.price) + Number(price.Regreso.price) * passengers : price.Salida.price * passengers : '';
  useEffect(() => {
    setPasajeros(passengers)
   }, [])
  const navigate = useNavigate()
  const handleSeats = () =>{
    navigate('/flightinfo/seats')
  }
  
  return (
    <section className="SecFactura">
      <article className="SecFactura__reserva">
        <h3>Tu reservación</h3>
        <section className="SecFactura__reserva__padding">
          <div className="SecFactura__pasajero">
            <p>Pasajeros</p>
            <div>
            {pasajeros.Adults ? <p>{pasajeros.Adults>1 ? `${pasajeros.Adults} Adultos` : `${pasajeros.Adults} Adulto` }</p> : ''}
            {pasajeros.Childs ? <p>{pasajeros.Childs>1 ? `${pasajeros.Childs} Niños` : `${pasajeros.Childs} Niño` }</p> : ''}
            {pasajeros.Babes ? <p>{pasajeros.Babes>1 ? `${pasajeros.Babes} Bebés` : `${pasajeros.Babes} Bebé` }</p> : ''}
            </div>
          </div>
          <h3 className="textVueloSalida">Vuelo de salida</h3>

          <div className="SecFactura__date">
            <div>
              <h2>{origen.substring(0,3).toUpperCase()}</h2> <p>{hOrigenSalida}</p>
            </div>

            <figure>
              <img src={icon} alt="" />
            </figure>

            <div>
              <h2>{destino.substring(0,3).toUpperCase()}</h2> <p>{hDestinoSalida}</p>
            </div>
          </div>
          
          <p className="textFooterCardFactura">{date.salida}</p>
          
          {date.regreso !== '' ? <> <h3 className="textVueloSalida">Vuelo de Regreso</h3>

          <div className="SecFactura__date">
            <div>
              <h2>{destino.substring(0,3).toUpperCase()}</h2> <p>{hOrigenRegreso}</p>
            </div>

            <figure>
              <img src={icon} alt="" />
            </figure>

            <div>
              <h2>{origen.substring(0,3).toUpperCase()}</h2> <p>{hDestinoRegreso}</p>
            </div>
          </div>
          
          <p className="textFooterCardFactura">{date.regreso}</p> </> : ''}
          
        </section>
      </article>

      <article className="SecFactura__Pago">
        <h3>Costo de vuelo</h3>
        <section className="SecFactura__reserva__padding cardPagosFlex">
          <div className="SecFactura__Pago__flex">
            <p>Boleto de salida</p>
            <p>${price.Salida ? price.Salida.price : ''}</p>
          </div>
          {price.Regreso ? <>
            <div className="SecFactura__Pago__flex">
              <p>Boleto de regreso</p>
              <p>${price.Regreso.price}</p>
            </div> 
            </>
          : ''
          }
          <div className="SecFactura__Pago__flex">
            <p>Pasajeros</p>
            <p>{passengers}</p>
          </div>
          <div className="SecFactura__Pago__flex">
            <p>Iva Tarifa</p>
            <p>$75,MX</p>
          </div>
          <div className="SecFactura__Pago__flex">
            <h4>Total</h4>
            <h4>${total} COP</h4>
          </div>
        </section>
      </article>

      {/* <article className="SecFactura__Pago">
        <h3>Servicios opcionales</h3>
        <section className="SecFactura__reserva__padding cardPagosFlex">
          <div className="SecFactura__Pago__flex">
            <p>Selecciona tu asiento</p>
            <p>-$17800</p>
          </div>

          <div className="SecFactura__Pago__flex">
            <p>Iva Servicios</p>
            <p>$75,MX</p>
          </div>
          <div className="SecFactura__Pago__flex">
            <h4>Total</h4>
            <h4>${price.Salida ? price.Regreso ? 
            Number(price.Salida.price) + Number(price.Regreso.price) : price.Salida.price : ''} COP</h4>
          </div>
        </section>
      </article> */}
      {validate ? (step !== 'seats' ? <button onClick={()=> handleSeats()} className="btnActionFactura">Seleccionar asientos</button> : '') : ''}
      {asientos ? <button onClick={()=> handlePay(total)} className="btnActionFactura">Pagar con Paypal</button> : ''}
    </section>
  )
}

export default Facturación