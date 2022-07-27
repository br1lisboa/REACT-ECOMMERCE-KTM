//Funcion auxiliar para generar la orden.
const generarOrden = (name, mail, repeatEmail, tel, cart, total) => {
  return {
    buyer: {
      name: name,
      mail: mail,
      repeatEmail: repeatEmail,
      tel: tel,
    },
    items: cart,
    total: total,
    createdAt: new Date().toLocaleString(),
  };
};

export default generarOrden;
