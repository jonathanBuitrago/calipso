import * as yup from "yup";

export default yup.object().shape({
  email: yup
    .string()
    .email("Email invalido")
    .required("Campro requerido"),
  password: yup
    .string()
    .required("Campo requerido")
    .min(8, "Es demasiado corto - debe tener un minimo de 8 caracteres")
});
