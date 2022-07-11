import React, { createContext, useState } from 'react';

export const Shop = createContext(); /* >>>Hay que exportar tambien el contexto que se crea */

const ShopProvider = ({ children }) => {

	/* const [estadoA, setEstadoA] = useState('Este es el valor por defecto') */

	const [cart, setCart] = useState([]);

	const addItem = (producto, cantidad) => {
		console.log(producto, cantidad);
		const productoRepetido = isInCart(producto);
		if (productoRepetido) {
			productoRepetido.quantity += cantidad
			setCart([...cart])
		} else {
			setCart([...cart, {...producto, quantity: cantidad}])
		}
		//Esta funcion va a agregar un item al carrito.
	}

	const deletItem = (id) => {
		const updatedCart = cart.filter(element => element.id !== id);
		setCart(updatedCart);
	}

	const clearCart = () => {
		setCart([]);
	}

	const isInCart = (producto) => {
		return cart.find(elemento => elemento.id === producto.id)
	}

	return(
		<Shop.Provider value={{/* estadoA, setEstadoA, */ addItem, cart, deletItem, clearCart}}>
			{children}
		</Shop.Provider>
	);
}

export default ShopProvider;