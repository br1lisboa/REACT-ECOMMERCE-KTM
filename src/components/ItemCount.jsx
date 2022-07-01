import React, { useState } from 'react';
import './styles/ItemCount.css';

const ItemCount = ({ onAdd }) => {
	const intial = 1;
	const stock = 10;

	const [count, setCount] = useState(intial);

	const addProduct = (num) => {
		setCount(count + num)
	};

	return (
		<div className="itemcount-container">
			<div className="itemcount-container-contador">
				<button className="itemcount-container-buton" onClick={() => addProduct(-1)} disabled={count === intial ? true : null}>
					-
				</button>
				<span className="itemcount-container-count"> {count} </span>
				<button className="itemcount-container-buton" onClick={() => addProduct(+1)} disabled={count === stock ? true : null}>
					+
				</button>
			</div>
			<button className="itemcount-container-buttonadd" onClick={() => onAdd(count)} disabled={stock === 0 ? true : null}>
				Añadir al carrito
			</button>
		</div>
	);
}

export default ItemCount;