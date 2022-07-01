import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";

const ItemDetail = () => {
	const [productDetail, setProductDetail] = useState([]);
	const [loading, setLoading] = useState(false);
	console.log(productDetail);

	useEffect( () => {
		setLoading(true)
		const getProduct = async () => {
			try {
				const response = await fetch('https://fakestoreapi.com/products/1')
				const data = await response.json();
				setProductDetail(data)
				setLoading(false)
			} catch (error) {
				console.log(error);
			}
		}

		getProduct();
	}, [])

	return (
		<div>
			{
				loading ? (
					<>
						{
							productDetail.map((productDetail) => {
								return (
									<div key={productDetail.id}>
										<ItemCard 
											name={productDetail.title}
											descripcion={productDetail.description}
											imagen={productDetail.image}
											precio={productDetail.price}
										/>
									</div>
								);
							})
						}
					</>
				) : (
					<h2>Cargando producto...</h2>
				)
			}
		</div>
	);
}

export default ItemDetail;