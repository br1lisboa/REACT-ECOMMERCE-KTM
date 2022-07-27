import React, { useContext, /* useRef */ } from "react";
import { Shop } from "../context/ShopProvider";
import "./styles/Cart.css";
import { Link } from "react-router-dom";
import ordenGenerada from "../utils/generarOrden";
import guardarOrden from "../utils/guardaOrden";
import { useFormik } from "formik";
import { signupSchema } from "../schemas";

const initialValues = {
  name: "",
  email: "",
  repeatEmail: "",
  tel: "",
};

function Cart() {
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: signupSchema,
      onSubmit: (values, actions) => {
        console.log(values);
        actions.resetForm();
      },
    });

  const { cart, deletItem, clearCart, totalInCart } = useContext(Shop);

  const confirmarOrden = async () => {
    const orden = ordenGenerada(
      { name: values.name },
      { mail: values.email },
      { repeatEmail: values.repeatEmail },
      { tel: values.tel },
      cart,
      totalInCart()
    );
    guardarOrden(cart, orden);
    clearCart()
  };

  return (
    <>
      {cart.length === 0 ? (
        <div className="mensaje-carrito-vacio">
          <h3>No hay productos en el carrito!</h3>
          <h3>Vuelva al Inicio para continuar comprando!</h3>
          <Link to="/" className="link">Ir al <span> HOME </span></Link>
        </div>
      ) : (
        <div className="container-ci">
          <h3 className="gray-details-title"> Detalles de la compra</h3>
          {cart.map((producto) => (
            <div className="cartitem-container" key={producto.id}>
              <div className="cartitem-detail">
                <h3>
                  {" "}
                  {producto.title} 
                </h3>
                <h4>Cantidad: {producto.quantity}</h4>
                <h4>Precio: ${producto.price}</h4>
                <h4>SubTotal: ${producto.quantity * producto.price}</h4>
                <button
                  className="buton-delete"
                  onClick={() => deletItem(producto.id)}
                >
                  Eliminar producto
                </button>
              </div>
              <img
                className="img-detail-cart"
                src={producto.image}
                alt="imagen de la compra"
              />
            </div>
          ))}
          <div>
            <p className="total-compra">Total de la compra: <span>$$ {totalInCart()} USD.</span></p>
          </div>

          <div className="form-full" >
            <h4 className="form-title">Rellena los datos para finalizar la compra.</h4>
            <form className="form-container" onSubmit={handleSubmit}>
              <label htmlFor="name" className="form-solit">Nombre y apellido</label>
              <input
                type="text"
                name="name"
                value={values.name}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <div className="error-container">
                {errors.name && touched.name && (
                  <p className="form-error">Debes ingresar nombre y apellido correcto.</p>
                )}
              </div>

              <label htmlFor="email" className="form-solit">Email</label>
              <input
                type="email"
                name="email"
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <div className="error-container">
                {errors.email && touched.email && (
                  <p className="form-error">Debes ingresar un email valido.</p>
                )}
              </div>

              <label htmlFor="repeatEmail" className="form-solit">Repetir email</label>
              <input
                type="email"
                name="repeatEmail"
                value={values.repeatEmail}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <div className="error-container">
                {errors.repeatEmail && touched.repeatEmail && (
                  <p className="form-error">
                    No coincide con el primer mail ingresado.
                  </p>
                )}
              </div>

              <label htmlFor="tel" className="form-solit">Celular</label>
              <input
                type="tel"
                name="tel"
                value={values.tel}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <div className="error-container">
                {errors.tel && touched.tel && (
                  <p className="form-error">Celular incorrecto</p>
                )}
              </div>

              <button
                className="buton-confirm"
                onClick={confirmarOrden}
                type="submit"
              >
                CONFIRMAR ORDEN
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
