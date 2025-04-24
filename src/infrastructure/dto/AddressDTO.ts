interface GeoDTO {
  lat: string;
  lng: string;
}

export interface AddressDTO {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoDTO;
}