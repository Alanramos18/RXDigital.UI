import { Admin } from "./admin";
import { Farmaceutico } from "./farmaceutico";
import { Medico } from "./medico";
import { Paciente } from "./paciente";
import { Roles } from "./roles.enums";

export class MainState {
    role: Roles;
    userId: string;
    medic: Medico;
    patient: Paciente;
    pharmaceutic: Farmaceutico;
    admin: Admin;
}