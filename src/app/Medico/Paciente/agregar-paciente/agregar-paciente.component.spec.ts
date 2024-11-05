import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgregarPacienteComponent } from './agregar-paciente.component';
import { By } from '@angular/platform-browser';

describe('AgregarPacienteComponent', () => {
  let component: AgregarPacienteComponent;
  let fixture: ComponentFixture<AgregarPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgregarPacienteComponent],
      imports: [FormsModule, ReactiveFormsModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería tener el formulario inválido al inicio', () => {
    expect(component.pacienteForm.invalid).toBeTruthy();
  });

  it('debería hacer que el formulario sea válido al ingresar todos los datos requeridos', () => {
    component.pacienteForm.controls['firstName'].setValue('Juan');
    component.pacienteForm.controls['lastName'].setValue('Pérez');
    component.pacienteForm.controls['birthDay'].setValue('1990-01-01');
    component.pacienteForm.controls['socialNumber'].setValue('12345678');
    component.pacienteForm.controls['gender'].setValue('Masculino');
    component.pacienteForm.controls['nationality'].setValue('Argentina');
    component.pacienteForm.controls['cellphone'].setValue('123456789');
    component.pacienteForm.controls['homePhone'].setValue('987654321');
    component.pacienteForm.controls['socialWorkName'].setValue('Obra Social');
    component.pacienteForm.controls['socialPlan'].setValue('Plan A');
    component.pacienteForm.controls['address'].setValue('Calle Falsa 123');
    component.pacienteForm.controls['email'].setValue('juan@example.com');
    component.pacienteForm.controls['inscriptionDate'].setValue(new Date());
    component.pacienteForm.controls['isAvailable'].setValue(true);

    expect(component.pacienteForm.valid).toBeTruthy();
  });

  it('debería deshabilitar el botón "Aceptar" si el formulario es inválido', () => {
    const aceptarButton = fixture.debugElement.query(By.css('.aceptar')).nativeElement;
    expect(aceptarButton.disabled).toBeTruthy();
  });

  it('debería habilitar el botón "Aceptar" si el formulario es válido', () => {
    component.pacienteForm.controls['firstName'].setValue('Juan');
    component.pacienteForm.controls['lastName'].setValue('Pérez');
    component.pacienteForm.controls['birthDay'].setValue('1990-01-01');
    component.pacienteForm.controls['socialNumber'].setValue('12345678');
    component.pacienteForm.controls['gender'].setValue('Masculino');
    component.pacienteForm.controls['nationality'].setValue('Argentina');
    component.pacienteForm.controls['cellphone'].setValue('123456789');
    component.pacienteForm.controls['homePhone'].setValue('987654321');
    component.pacienteForm.controls['socialWorkName'].setValue('Obra Social');
    component.pacienteForm.controls['socialPlan'].setValue('Plan A');
    component.pacienteForm.controls['address'].setValue('Calle Falsa 123');
    component.pacienteForm.controls['email'].setValue('juan@example.com');
    component.pacienteForm.controls['inscriptionDate'].setValue(new Date());
    component.pacienteForm.controls['isAvailable'].setValue(true);
    fixture.detectChanges();

    const aceptarButton = fixture.debugElement.query(By.css('.aceptar')).nativeElement;
    expect(aceptarButton.disabled).toBeFalsy();
  });

  it('debería llamar a la función onSubmit cuando el formulario es válido y se hace clic en "Aceptar"', () => {
    spyOn(component, 'onSubmit');

    component.pacienteForm.controls['firstName'].setValue('Juan');
    component.pacienteForm.controls['lastName'].setValue('Pérez');
    component.pacienteForm.controls['birthDay'].setValue('1990-01-01');
    component.pacienteForm.controls['socialNumber'].setValue('12345678');
    component.pacienteForm.controls['gender'].setValue('Masculino');
    component.pacienteForm.controls['nationality'].setValue('Argentina');
    component.pacienteForm.controls['cellphone'].setValue('123456789');
    component.pacienteForm.controls['homePhone'].setValue('987654321');
    component.pacienteForm.controls['socialWorkName'].setValue('Obra Social');
    component.pacienteForm.controls['socialPlan'].setValue('Plan A');
    component.pacienteForm.controls['address'].setValue('Calle Falsa 123');
    component.pacienteForm.controls['email'].setValue('juan@example.com');
    component.pacienteForm.controls['inscriptionDate'].setValue(new Date());
    component.pacienteForm.controls['isAvailable'].setValue(true);
    fixture.detectChanges();

    const aceptarButton = fixture.debugElement.query(By.css('.aceptar')).nativeElement;
    aceptarButton.click();

    expect(component.onSubmit).toHaveBeenCalled();
  });
});
