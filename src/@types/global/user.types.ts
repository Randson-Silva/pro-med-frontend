export interface IUserProfile {
  id: string;
  fullName: string;
  email: string;
  birthDate: string;
  cpf: string;
  rg: string;
  phoneNumber: string;
  gender: string;
  address: {
    id: number;
    state: string;
    city: string;
    street: string;
    neighborhood: string;
    houseNumber: number;
  };
  role: string;
}

export interface IUserCredentials {
  accessToken: string;
  refreshToken: string;
  profile: IUserProfile;
}

export interface IJWT {
  accessToken: string;
  refreshToken: string;
}