export type ErroCreateBusinessMessage =
  | "not exists"
  | "exists"
  | "El nombre del negocio ya esta registrado"
  | "La direccion ya se encuentra registrada"
  | "La ubicación ya se encuentra registrada"
  | "El usuario ya se encuentra asociado a un negocio";
