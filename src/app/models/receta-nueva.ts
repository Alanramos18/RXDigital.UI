export class RecetaNueva {
    doctorRegistration: number;
    patientId: number;
    medicines: MedicamentoReceta[] = [];
    diagnostic: string;
    indications: string;
    channels: number;
}

export interface MedicamentoReceta {
    medicineId: number;
    indications: string;
}