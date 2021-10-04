import { object, ref, string, number } from "yup";

const businessSchema = object({
  body: object({
    name: string()
      .required("El nombre del negocio es obligatorio")
      .max(20, "El nombre del negocio no debe exceder los 20 caracteres"),
    user: string().required("El usuario del negocio es oblgatorio"),
    categorie: string().required("La categoria del negocio es oblgatoria"),
    description: string()
      .notRequired()
      .max(
        100,
        "La descripción de la categoría no debe esceder los 100 caracteres"
      ),
    location: object({
      latitude: number().required("La ubicación del negocio es obligatoria"),
      longitude: number().required("La ubicación del negocio es obligatoria"),
    }),
    address: string().required("La dirección del negocio es obligatoria"),
    background: string()
      .notRequired()
      .url("Ingrese un url válido para la portado"),
    img: string().notRequired().url("Ingrese un url válido para la imagen"),
    phone: string().required("El teléfono del negocio es obligatorio"),
    rating: number().notRequired(),
  }),
});

export default {
  businessSchema,
};
