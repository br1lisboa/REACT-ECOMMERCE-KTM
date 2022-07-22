import React from 'react'

function Modal({open, onClose}) {
    if(!open) return null;

  return (
    <div className='overLay'>
        <div className="modalContainer">
            <p onClick={onClose}>X</p>

            <input type="text" placeholder='Ingrese su Nombre y Apellido' />
            <input type="text" placeholder='Ingrese su direccion'/>
            <input type="text" placeholder='Ingrese su direccion de correo electronico'/>
            
            <span>Continuar</span>
        </div>
    </div>
  )
}

export default Modal;