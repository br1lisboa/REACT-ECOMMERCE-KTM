import React, { useState } from 'react';
/* import Modal from './Modal'; */
import './styles/ItemCount.css';

const ItemCount = ({ onConfirm, maxQuantity}) => {

	const [value, setValue] = useState(1);
	/* const [openModal, setOpenModal] = useState(false); */

	const handleConfirm = () => {
		if (value <= maxQuantity) {
			onConfirm(value)
			console.log(value);
			console.log(maxQuantity);
		} 
		else {
			alert("Value > maxQuantity")
		}
	};

	return (
		<div className="itemcount-container">
			<div className="itemcount-container-contador">
				<button className="itemcount-container-buton" onClick={() => setValue(value => value-1)}>
					-
				</button>
				<span className="itemcount-container-count"> {value} </span>
				<button className="itemcount-container-buton" onClick={() => setValue(value => value+1)}>
					+
				</button>
			</div>
			<button className="itemcount-container-buttonadd" onClick={handleConfirm}>
				Añadir al Carro
			</button>
			{/* <button onClick={()=>{setOpenModal(true)}}>
				Modal
			</button>
			<Modal open={openModal} onClose={()=>{setOpenModal(false)}}/> */}
		</div>
	);
}

export default ItemCount;