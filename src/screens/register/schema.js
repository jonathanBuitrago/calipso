import * as yup from "yup";

export default yup.object().shape({
  nombre: yup.string().required("Campo requerido"),
  apellido: yup.string().required("Campo requerido"),
  email: yup
    .string()
    .email("Email invalido")
    .required("Campo requerido"),
  password: yup
    .string()
    .required("Campo requerido")
    .min(8, "Es demasiado corto - debe tener un minimo de 8 caracteres")
});
