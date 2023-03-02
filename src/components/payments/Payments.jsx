import React from 'react'
import amex from '../../assets/icons/payMethods/Amex.svg'
import paypal from '../../assets/icons/payMethods/paypal.svg'
import master from '../../assets/icons/payMethods/Mastercard.svg'
import Visa from '../../assets/icons/payMethods/Visa.svg'
import oxxo from '../../assets/icons/payMethods/oxxo.svg'
import seven from '../../assets/icons/payMethods/7-eleven.svg'
import walmart from '../../assets/icons/payMethods/walmart.svg'
import farmacias from '../../assets/icons/payMethods/farmacias.svg'
import './styles.scss'

const Payments = () => {
  return (
    <section className='payments'>
    <h1 className='payments__title'>Pago Seguro</h1>
    <div className='payments__container'>
        <article>
        <p>Tarjeta de crédito, tarjeta de débito y pago electrónico</p>
        <ul>
            <li><img src={amex} alt="amex" /></li>
            <li><img src={paypal} alt="paypal" /></li>
            <li><img src={master} alt="master" /></li>
            <li><img src={Visa} alt="visa" /></li>
        </ul>
        </article>
        <article>
            <p>Efectivo en cualquiera de las sucursales participantes</p>
            <ul>
                <li><img src={oxxo} alt="oxxo" /></li>
                <li><img src={seven} alt="seven" /></li>
                <li><img src={walmart} alt="walmart" /></li>
                <li><img src={farmacias} alt="farmacias" /></li>
            </ul>
        </article>
    </div>
    </section>
  )
}

export default Payments