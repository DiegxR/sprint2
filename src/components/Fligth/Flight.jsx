import React, {useState, useEffect} from 'react'
import DataListInput from 'react-datalist-input'
import close from '../../assets/icons/x.svg'
import search from '../../assets/icons/search.svg'
import './styles.scss'
import { getCountries } from '../Services/getData'

const Flight = ({type, handleChange, value}) => {
  const [click, setClick] = useState(false)
  const [option, setOption] = useState('')
  const [dataList, setdataList] = useState([])
  
  const getDataContries = async() =>{
    const data = await getCountries()
    setdataList(data)
  }
  
  
  useEffect(()=>{
    getDataContries()
   
  },[])

  const changeStatus = (e) =>{
    setOption(e.value)
  }
  useEffect(() => {
    handleChange(type, option)
  }, [option])
  
  return (
    <>
{/* Valor del lugar */}
    <div onClick={() =>setClick(!click)} className='flight'>
        <p className='flight__type'>{value !== '' ? (option === '' ? type : `Seleccione un ${type}`) : value}</p>
        <p className='flight__value'  onChange={ e => changeStatus(e)}> {value == '' ? (option !== '' ? option : '---'): value}</p>
    </div> 
{/* Opciones del lugar  */}
    {click ? 
    <div className="modal">
      <section className="options">
        <figure className='options__head'>
        <h2>{type === 'Origen' ? '¿Desde dónde viajas?' : '¿A dónde viajas'}</h2>
        <img src={close} onClick={() =>setClick(!click)}  alt='close'/>
        </figure>
        <label className='datalist'>
        <img src={search} alt='search'/>
        <DataListInput  items={dataList} onSelect={(e) => changeStatus(e)}/>
        </label>
      </section>
    </div> 
    : ''}
    </>
  )
}

export default Flight