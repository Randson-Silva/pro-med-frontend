export interface IRegisterUser {
  fullName: string;
  email: string;
  birthDate: string;
  cpf: string;
  rg: string;
  phoneNumber: string;
  gender: string;
  address: {
    state: string;
    city: string;
    street: string;
    neighborhood: string;
    houseNumber: number;
  };
  password: string;
  repeatPassword: string;
}

export interface IUpdateClient {
  fullName: string;
  email: string;
  birthDate: string;
  cpf: string;
  rg: string;
  phoneNumber: string;
  gender: string;
  address: {
    state: string;
    city: string;
    street: string;
    neighborhood: string;
    houseNumber: number;
  };
  photo: string;
  medicalHistoric: {
    bloodType: string;
    prescriptionDrugs: string;
    drugAllergies: string;
    hospitalizationHistoric: string;
    surgeriesHistoric: string;
    priorDiseases: string;
    extraNotes: string;
  }
} 
