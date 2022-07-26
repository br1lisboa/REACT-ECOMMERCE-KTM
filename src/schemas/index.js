import * as Yup from 'yup';


export const signupSchema = Yup.object({
    name: Yup.string().min(3).required('Por favor ingresa tu nombre y apellido para generar la orden.'),
    email: Yup.string().email('Ingresa un email valido.').required('Ingresa un email.'),
    repeatEmail: Yup.string().oneOf([Yup.ref('email'), 'El email no coincide.']).required('Repita el email para confirmar.'),
    tel: Yup.number().min(6).required('Ingresa un celular valido.'),
})