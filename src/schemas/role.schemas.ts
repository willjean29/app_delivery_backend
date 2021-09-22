import { object, ref, string } from "yup";

const roleSchema = object({
  body: object({
    name: string()
      .required("El rol es obligatorio")
      .max(15, "El rol no puede exceder los 15 caracteres"),
    description: string()
      .required("La descripción es obligatoria")
      .max(150, "Ingrese una descripcion del rol en maximo 150 caracteres"),
  }),
});

export default {
  roleSchema,
};
