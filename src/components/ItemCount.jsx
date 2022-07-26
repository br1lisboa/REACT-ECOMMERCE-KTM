import React, { useState } from 'react';
import './styles/ItemCount.css';
import Swal from 'sweetalert2';

const ItemCount = ({ onConfirm, maxQuantity}) => {

	const [value, setValue] = useState(1);

	const handleConfirm = () => {
		if (value <= maxQuantity) {
			onConfirm(value)
		} 
		else {
			Swal.fire({
				icon: 'alert',
				title: 'Ups, lamentamos el incoveniente.',
				text: 'Producto fuera de stock'
			});
		}
	};

	const handleAdd = () => {
		if (value < maxQuantity) {
			setValue (value + 1)
		}
	}

	const handleSubstract = () => {
		if (value > 0) {
			setValue (value - 1)
		}
	}

	return (
		<div className="itemcount-container">
			<div className="itemcount-container-contador">
				<button className="itemcount-container-buton" onClick={handleSubstract}>
					-
				</button>
				<span className="itemcount-container-count"> {value} </span>
				<button className="itemcount-container-buton" onClick={handleAdd}>
					+
				</button>
			</div>
			<button className="itemcount-container-buttonadd" onClick={handleConfirm}>
				Añadir al Carro
			</button>
		</div>
	);
}

export default ItemCount;