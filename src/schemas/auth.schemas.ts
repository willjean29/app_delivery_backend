import { object, ref, string } from "yup";
const signUpSchema = object({
  body: object({
    name: string().required("El nombre es obligatorio"),
    lastName: string().required("El apellido es obligatorio"),
    phone: string().required("El # de telefono es obligatorio"),
    image: string(),
    email: string()
      .email("Ingrese un email válido")
      .required("El email es obligatorio"),
    password: string()
      .required("La contraseña es obligatoria")
      .min(6, "La contraseña debe tener minimo 6 caracteres"),
    confirmPassword: string()
      .required("La contraseña es obligatoria")
      .min(6, "La contraseña debe tener minimo 6 caracteres")
      .oneOf([ref("password")], "Las contraseñas no son iguales"),
  }),
});

const signInSchema = object({
  body: object({
    email: string()
      .email("Ingrese un email válido")
      .required("El email es obligatorio"),
    password: string()
      .required("La contraseña es obligatoria")
      .min(6, "La contraseña debe tener minimo 6 caracteres"),
  }),
});

export default {
  signUpSchema,
  signInSchema,
};
