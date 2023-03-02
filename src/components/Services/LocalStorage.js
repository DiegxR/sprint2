
export const getDataForm = () =>{
    const data = JSON.parse(localStorage.getItem('dataForm')) || {}
    return data;
}

export const setDataForm = (data) =>{
    localStorage.setItem('dataForm', JSON.stringify(data))
}

export const deleteData = () =>{
    localStorage.clear()
}
