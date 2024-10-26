import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Receta } from '../models/receta';
import { Paciente } from '../models/paciente';
import { Medico } from '../models/medico';



@Injectable({
  providedIn: 'root'
})
export class MedicService {

  private medic: Medico;
  private patient: Paciente;

  setMedicData(medic: Medico) {
    this.medic = medic;
  }

  getMedicData() {
    return this.medic;
  }

  getMedicFullName(): string {
    return `${this.medic.lastName}, ${this.medic.firstName}`;  
  }

  clearMedicData() {
    this.medic = null;
  }

  setPatientData(patient: Paciente) {
    this.patient = patient;
  }

  getPatientData() {
    return this.patient;
  }

  clearPatientData() {
    this.patient = null;
  }
}
