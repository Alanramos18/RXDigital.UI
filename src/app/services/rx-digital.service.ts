import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Receta } from '../models/receta';
import { Paciente } from '../models/paciente';
import { Medico } from '../models/medico';
import { Medicamento, NuevoMedicamento } from '../models/medicamento';
import { RecetaNueva } from '../models/receta-nueva';
import { ObraSocial } from '../models/obraSocial';
import { GetPrescriptionsPharmaceuticalProc } from '../models/getPrescriptionsPharmaceuticalProc';
import { Register } from '../models/register';
import { Especialidad } from '../models/especialidad';
import { RecetaFiltrada } from '../models/recetaFiltrada';



@Injectable({
  providedIn: 'root'
})
export class RxDigitalService {

  private apiUrl = 'https://localhost:44375';

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    const url = `${ this.apiUrl }/login`;
    const body = { email, password };

    return this.http.post(url, body);
  }

  register(user: Register): Observable<any> {
    const url = `${ this.apiUrl }/login/register`;

    return this.http.post(url, user);
  }

  getSpecialities(): Observable<Especialidad[]> {
    const url = `${ this.apiUrl }/admin/get-specialities`;

    return this.http.get<Especialidad[]>(url);
  }

  //////////////////////// PACIENTES ////////////////////////

  getPatientInfo(patientId: number): Observable<Paciente> {
    const url = `${this.apiUrl}/patient/basicInfo/${patientId}`;

    return this.http.get<Paciente>(url);
  }

  createPatient(patient: Paciente): Observable<any> {
    const url = `${this.apiUrl}/patient`;

    return this.http.post(url, patient);
  }

  deletePatient(dni: number): Observable<any> {
    const url = `${this.apiUrl}/patient/${dni}`;

    return this.http.delete(url);
  }

  //////////////////////// RECETAS ////////////////////////

  getPrescriptions(patientId: number): Observable<Receta[]> {
    const url = `${this.apiUrl}/patient/prescriptions/${patientId}`;

    return this.http.get<Receta[]>(url);
  }

  emitPrescription(body: RecetaNueva): Observable<number> {
    const url = `${this.apiUrl}/doctor/create-prescription`;

    return this.http.post<number>(url, body);
  } 

  deletePrescription(code: string): Observable<any> {
    const url = `${this.apiUrl}/doctor/delete-prescription/${code}`;

    return this.http.delete(url);
  }

  filterRxByDate(from: string, to: string): Observable<RecetaFiltrada[]> {
    const url = `${this.apiUrl}/admin/get-filter-rx?from=${from}&to=${to}`;

    return this.http.get<RecetaFiltrada[]>(url);
  } 

  //////////////////////// MEDICO ////////////////////////

  getMedicInfo(userId: string): Observable<Medico> {
    const url = `${this.apiUrl}/doctor/getByUserId/${userId}`;

    return this.http.get<Medico>(url);
  }

  //////////////////////// MEDICAMENTOS ////////////////////////

  getMedicine(medicineName: string): Observable<Medicamento[]> {
    const url = `${this.apiUrl}/doctor/searchMedicines?medicineName=${medicineName}`;

    return this.http.get<Medicamento[]>(url);
  } 

  createMedicine(med: NuevoMedicamento): Observable<any> {
    const url = `${this.apiUrl}/admin/create-med`;

    return this.http.post(url, med);
  } 

  updateMedicine(med: NuevoMedicamento): Observable<any> {
    const url = `${this.apiUrl}/admin/modify-med`;

    return this.http.put(url, med);
  } 

  //////////////////////// OBRA SOCIAL ////////////////////////

  getSocialWorks(): Observable<ObraSocial[]> {
    const url = `${this.apiUrl}/patient/getSocialWorks`;

    return this.http.get<ObraSocial[]>(url);
  } 

  //////////////////////// FARMACEUTICO ////////////////////////

  getRx(rxCode: string): Observable<GetPrescriptionsPharmaceuticalProc> {
    const url = `${this.apiUrl}/Pharmaceutical/get-presciption-info/${rxCode}`;

    return this.http.get<GetPrescriptionsPharmaceuticalProc>(url);
  }
  
  processRx(rxCode: string, isAccepted: boolean): Observable<any> {
    const url = `${this.apiUrl}/Pharmaceutical/rx/${rxCode}&isAccepted${isAccepted}`;

    return this.http.post(url, null);
  }
}
