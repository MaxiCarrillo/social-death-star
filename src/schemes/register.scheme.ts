import * as yup from "yup";

const RegisterScheme = yup.object({
    username: yup.string().required("El usuario es obligatorio"),
    password: yup.string().required("La contraseña es obligatoria"),
    name: yup.string().required("El nombre es obligatorio"),
    photoUrl: yup.string().url("La foto de perfil debe ser una URL válida").required("La foto de perfil es obligatoria")
}).required();

export default RegisterScheme;