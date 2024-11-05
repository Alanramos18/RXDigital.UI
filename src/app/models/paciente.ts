export class Paciente {
    patientId: number;
    firstName: string;
    lastName: string;
    birthDay: string;
    gender: string;
    nationality: string;
    cellphone: string;
    homePhone: string;
    socialNumber: string; //numero de afiliado
    socialWorkName: string; //plan de obra social
    socialPlan: string; // obra social
    address: string;
    email: string;
    inscriptionDate: Date; //fecha de inscripcion
    isAvailable: boolean; //estado de habilitacion
    province: string;
    locality: string;
}