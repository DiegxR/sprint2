import React from 'react'
import './styles.scss'
const IconEquipaje = ({ price, type, name, handleClick, active }) => {
    
    return (
        <figure onClick={(e) => handleClick(e)} className={`iconEquipaje ${active === name ? 'activeEquip' : ''} `} id={name}>
            <span className="material-symbols-outlined">cases
            </span>
            <figcaption>
                <p>{type}</p>
                <h4>{price}</h4>
            </figcaption>
        </figure>
    )
}

export default IconEquipaje