import React, { useState, useEffect } from 'react'
import plus from '../../assets/icons/plus.svg'
import minus from '../../assets/icons/minus.svg'
import x from '../../assets/icons/x.svg'
import './styles.scss'


export const useCounter = (initialValue) => {
    const [counter, setCounter] = useState(initialValue)
    const increase = () => setCounter(counter + 1);
    const decrement = () => setCounter((counter)=> counter>0 ? counter-1:counter)
    return {
        counter,
        increase,
        decrement,
        setCounter
    }
}
const Passengers = ({handleChange, value}) => {
 
   
    const [click, setClick] = useState(false)
    const counterAdults = useCounter(value?.Adults || 0)
    const counterChilds = useCounter(value?.Childs || 0)
    const counterBabes = useCounter(value?.Babes || 0)
    useEffect(()=>{
        handleChange("passengers",{
            "Adults":counterAdults.counter,
            "Childs":counterChilds.counter,
            "Babes":counterBabes.counter
        }
            )
    }, [counterAdults.counter,
        counterChilds.counter,
        counterBabes.counter
    ])
    
    
    const showCount = (count, num) =>{
        switch(num){
            case 1:{
                return count === 1 ? `${count} Adulto` : count > 1 ? `${count} Adultos` : '-'; 
            }
            case 2:{
                return count === 1 ? `${count} Niño` : count > 1 ? `${count} Niños` : '-'; 
            }
            case 3:{
                return count === 1 ? `${count} Bebé` : count > 1 ? `${count} Bebés` : '-'; 
            }
            default:{
                return count
            }
        }
    }
    return (
        <>
            <div onClick={() => setClick(!click)} className="openPassengers">
                <p>Pasajeros</p>
                <h4>{`${showCount(counterAdults.counter, 1)}
                    ${showCount(counterChilds.counter, 2)}
                    ${showCount(counterBabes.counter, 3)}`
                }</h4>
            </div>
            {click ?
                <div className='modal'>
                    <div className='counters'>
                    <img src={x} alt="x" onClick={() => setClick(!click)} className="x"/>
                        <section className='counters__container'>
                            <div className='counters__info'>
                                <h4>Adultos</h4>
                                <p>{`(13 + años)`}</p>
                            </div>
                            <figure className='counter'>
                                <img onClick={counterAdults.decrement} src={minus} alt="minus"/>
                                <h1>{counterAdults.counter}</h1>
                                <img onClick={counterAdults.increase} src={plus} alt="plus"/>
                            </figure>
                        </section>
                        <section className='counters__container'>
                            <div className='counters__info'>
                                <h4>Niños</h4>
                                <p>{`(2 - 12 años)`}</p>
                            </div>
                            <figure className='counter'>
                                <img onClick={counterChilds.decrement} src={minus} alt="minus" />
                                <h1>{counterChilds.counter}</h1>                                
                                <img onClick={counterChilds.increase} src={plus} alt="plus" />
                            </figure>
                        </section>
                        <section className='counters__container'>
                            <div className='counters__info'>
                                <h4>Bebés</h4>
                                <p>{`(0 - 23 meses)`}</p>
                            </div>
                            <figure className='counter'>
                                <img onClick={counterBabes.decrement} src={minus} alt="minus" />
                                <h1>{counterBabes.counter}</h1> 
                                <img onClick={counterBabes.increase} src={plus} alt="plus" />
                            </figure>
                        </section>
                    </div>
                </div>
                : ''}
        </>
    )
}

export default Passengers