import React, { useState } from 'react';
import './styles/ItemCount.css';

const ItemCount = ({ onConfirm, maxQuantity /* onAdd */ }) => {
	/* const intial = 1;
	const stock = 10; */

	const [value, setValue] = useState(1);

	const handleConfirm = () => {
		if (value <= maxQuantity) {
			onConfirm(value)
		} 
		else {
			alert("Value > maxQuantity")
		}
	};

	const handleAdd = () => {
		if ( value < maxQuantity) {
			setValue(value + 1)
		}
	}

	return (
		<div className="itemcount-container">
			<div className="itemcount-container-contador">
				<button className="itemcount-container-buton" onClick={() => setValue(value => value-1)}>
					-
				</button>
				<span className="itemcount-container-count"> {value} </span>
				<button className="itemcount-container-buton" onClick={handleAdd}>
					+
				</button>
			</div>
			<button className="itemcount-container-buttonadd" onClick={handleConfirm}>
				Añadir al carrito
			</button>
		</div>
	);
}

export default ItemCount;