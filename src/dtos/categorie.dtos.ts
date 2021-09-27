export interface ICategorieDto {
  name: string;
  description?: string;
  img: string;
}

export interface ICategorieUpdateDto {
  name?: string;
  description?: string;
  img?: string;
}
