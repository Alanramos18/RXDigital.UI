export class Paciente {
    dni: number;
    nombre: string;
    apellido: string;
    fechaNacimiento: string;
    genero: string;
    nacionalidad: string;
    celular: string;
    telefono: string;
    numeroAfiliado: string; //numero de afiliado
    obraSocialId: number; //id de obra social
    obraSocial: string; //obra social
    planSocial: string; //plan de obra social
    domicilio: string;
    email: string;
    fechaInscripcion: Date; //fecha de inscripcion
    habilitacion: boolean; //estado de habilitacion
    provincia: string;
    localidad: string;
}