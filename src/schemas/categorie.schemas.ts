import { object, ref, string } from "yup";

const categorieSchema = object({
  body: object({
    name: string()
      .required("El nombre de la categoría es obligatorio")
      .max(20, "El nombre de la categoría no debe exceder los 20 caracteres"),
    description: string()
      .notRequired()
      .max(
        100,
        "La descripción de la categoría no debe esceder los 100 caracteres"
      ),
    img: string()
      .required("La imagen de la categoría es obligatoria")
      .url("Ingrese un url válido para la imagen"),
  }),
});

export default {
  categorieSchema,
};
