import axios from "axios"
import endpoints from "./endPoints"
import { deleteData } from "./LocalStorage"

export const getCountries = async() =>{
    const {data} = await axios.get(endpoints.countries)
    return data
}

export const validateFromTo = async(origen, destino) =>{
    const {data} = await axios.get(endpoints.flights)
    let validate = ''
    data.forEach(element => {
       if(Object.keys(element).includes(origen) && 
       Object.keys(element).includes(destino)){
        validate = element.prices 
        } 
    });
    const dataticket = await axios.get(endpoints.ticketPrices)
    const dataHours = await axios.get(endpoints.avalibleHours)
    const price = dataticket.data[validate]
    const hours = dataHours.data[validate]
    console.log(dataticket, dataHours, validate)
    return {
        price,
        hours
    }
}

export const getFlight = async(origen, destino) =>{
   const {data} = await axios.get(endpoints.flights); 
   let flight = [] 
   data.forEach((elem)=>{
        if(elem[origen] && elem[destino]){
            flight = elem;
        }
    })
    return flight;
}

export const setReserva = async(origen, destino, asientosRegreso, asientosSalida, fullData) =>{
    const {data} = await axios.get(endpoints.flights)
    let id = 0;
    let element = {}
    data.forEach((elem)=>{
        if(elem[origen] && elem[destino]){
            id = elem.id
            elem[origen].normal.seats.disables[0].push(...asientosSalida);
            elem[destino].normal.seats.disables[0].push(...asientosRegreso)
            element = elem
        }
    })
    await axios.post(endpoints.reservas, fullData)
    await axios.patch(endpoints.flights+id, element)
    deleteData()
    localStorage.clear()
    window.location.reload()
}