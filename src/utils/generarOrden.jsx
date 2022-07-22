//Funcion auxiliar para generar la orden.
const generarOrden = (nombre, direccion, cart, total) => {
    return {
        buyer: {
            nombre: nombre,
            direccion: direccion
        },
        items: cart,
        total: total,
        createdAt: new Date().toLocaleString()
    }
} 

export default generarOrden;


/* const [orderId, setOrderId] = useState('');

const nameRef = useRef();
const addresRef = useRef();
const cityRef = useRef();
const stateRef = useRef();
const emailRef = useRef();
const mobileRef = useRef();

  
function handleClick() {
    const ordenDatos = {
      buyer: {
        name: nameRef.current.value,
        addres: addresRef.current.value,
        city: cityRef.current.value,
        state: stateRef.current.value,
        emai: emailRef.current.value,
        mobile: mobileRef.current.value
      }
    }
  } */