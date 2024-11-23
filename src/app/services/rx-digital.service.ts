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
import { TopMedicina } from '../models/topMediciona';
import { TopMedico } from '../models/topMedico';
import { Farmaceutico } from '../models/farmaceutico';
import { Admin } from '../models/admin';
import { Usuario } from '../models/usuario';
import { RejectRxResquestDto } from '../models/rejectRxResquestDto';



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

  updatePatient(id:number, patient: Paciente): Observable<any> {
    const url = `${this.apiUrl}/patient/${id}`;

    return this.http.put(url, patient);
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

  updatePrescription(rxCode: string, body: RecetaNueva): Observable<any> {
    const url = `${this.apiUrl}/doctor/update-prescription/${rxCode}`;

    return this.http.put(url, body);
  } 

  deletePrescription(code: string): Observable<any> {
    const url = `${this.apiUrl}/doctor/delete-prescription/${code}`;

    return this.http.delete(url);
  }

  filterRxByDate(from: string, to: string): Observable<RecetaFiltrada[]> {
    const url = `${this.apiUrl}/admin/get-filter-rx?from=${from}&to=${to}`;

    return this.http.get<RecetaFiltrada[]>(url);
  } 

  getTopRx(top: string): Observable<TopMedicina[]> {
    const url = `${this.apiUrl}/admin/get-top-rx?&top=${top}`;

    return this.http.get<TopMedicina[]>(url);
  } 

  getTopMedics(top: string): Observable<TopMedico[]> {
    const url = `${this.apiUrl}/admin/get-top-medics?&top=${top}`;

    return this.http.get<TopMedico[]>(url);
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

  updateMedicine(id: number, med: NuevoMedicamento): Observable<any> {
    const url = `${this.apiUrl}/admin/modify-med/${id}`;

    return this.http.put(url, med);
  } 

  deleteMedicine(id: number): Observable<any> {
    const url = `${this.apiUrl}/admin/delete-med?medicineId=${id}`;

    return this.http.delete(url);
  } 

  //////////////////////// OBRA SOCIAL ////////////////////////

  getSocialWorks(): Observable<ObraSocial[]> {
    const url = `${this.apiUrl}/patient/getSocialWorks`;

    return this.http.get<ObraSocial[]>(url);
  } 

  //////////////////////// Admin ////////////////////////

  getAdminInfo(userId: string): Observable<Admin> {
    const url = `${this.apiUrl}/admin/getByUserId/${userId}`;

    return this.http.get<Admin>(url);
  }

  getUsersForAdmin(): Observable<Usuario[]> {
    const url = `${this.apiUrl}/admin/get-users`;

    return this.http.get<Usuario[]>(url);
  }

  reviewUsers(userId: string, isApproved: boolean): Observable<any> {
    const url = `${this.apiUrl}/admin/review-users/${userId}?isApproved=${isApproved}`;

    return this.http.post(url, null);
  }
  //////////////////////// FARMACEUTICO ////////////////////////

  getRx(rxCode: string): Observable<GetPrescriptionsPharmaceuticalProc> {
    const url = `${this.apiUrl}/Pharmaceutical/get-presciption-info/${rxCode}`;

    return this.http.get<GetPrescriptionsPharmaceuticalProc>(url);
  }
  
  acceptRx(rxCode: string, matricula: number): Observable<any> {
    const url = `${this.apiUrl}/Pharmaceutical/rx/${rxCode}?matricula=${matricula}`;

    return this.http.post(url, null);
  }

  rejectRx(dto: RejectRxResquestDto): Observable<any> {
    const url = `${this.apiUrl}/Pharmaceutical/rx`;

    return this.http.post(url, dto);
  }

  getPharmaInfo(userId: string): Observable<Farmaceutico> {
    const url = `${this.apiUrl}/pharmaceutical/getByUserId/${userId}`;

    return this.http.get<Farmaceutico>(url);
  }
}
