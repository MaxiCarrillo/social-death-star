import * as yup from "yup";

const LoginScheme = yup.object({
    username: yup.string().required("El usuario es obligatorio"),
    password: yup.string().required("La contraseña es obligatoria")
}).required();

export default LoginScheme;