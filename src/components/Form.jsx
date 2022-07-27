import React from "react";
import { useFormik } from "formik";
import { signupSchema } from "../schemas";

const initialValues = {
  name: "",
  email: "",
  repeatEmail: "",
  tel: "",
};

function Form() {
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: signupSchema,
      onSubmit: (values, actions) => {
        console.log(values);
        actions.resetForm();
      },
    });

  return (
    <div>
      <h4>Formulario de contacto</h4>
      <form className="signup_form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={values.name}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        <div className="error-container">
          {errors.name && touched.name && (
            <p className="form-error">{errors.name}</p>
          )}
        </div>

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={values.email}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        <div className="error-container">
          {errors.email && touched.email && (
            <p className="form-error">{errors.email}</p>
          )}
        </div>

        <label htmlFor="repeatEmail">Repetir email</label>
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
              No coinciden el correo electronico ingresado primero.
            </p>
          )}
        </div>

        <label htmlFor="tel">Celular</label>
        <input
          type="tel"
          name="tel"
          value={values.tel}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        <div className="error-container">
          {errors.tel && touched.tel && (
            <p className="form-error">{errors.tel}</p>
          )}
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Form;
