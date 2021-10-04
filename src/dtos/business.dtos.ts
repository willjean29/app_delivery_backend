export interface BusinessDto {
  name: string;
  user: string;
  categorie: string;
  description?: string;
  address: string;
  location: LocationDto;
  background?: string;
  img?: string;
  rating: number;
}

export interface LocationDto {
  latitude: number;
  longitude: number;
}
