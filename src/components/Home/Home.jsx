import React from 'react'
import Services from '../availableServices/Services'
import FormTicket from '../FormTicket/FormTicket';
import Payments from '../payments/Payments.jsx';
import bgImg from '../../assets/bg.jfif'
import './styles.scss'
function Home() {
  return (
    <>
    <img src={bgImg} alt="img" className='background'/>
    <div className="Home">
      <div className='formContainer'>
      <FormTicket/>
      </div>
      <Payments/>
      <Services/>
    </div>
    </>
  );
}

export default Home;
