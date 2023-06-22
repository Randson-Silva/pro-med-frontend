export interface IClientProfile {
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
  photo: string;
  medicalHistoric: {
    bloodType: string;
    prescriptionDrugs: string;
    drugAllergies: string;
    hospitalizationHistoric: string;
    surgeriesHistoric: string;
    priorDiseases: string;
    extraNotes: string;
  },
  appointments: [];
}
