import type { AddressDTO } from "./AddressDTO";
import type { CompanyDTO } from "./CompanyDTO";

export interface UserDTO {
  id: number;
  name: string;
  username: string;
  email: string;
  address: AddressDTO;
  phone: string;
  website: string;
  company: CompanyDTO;
}