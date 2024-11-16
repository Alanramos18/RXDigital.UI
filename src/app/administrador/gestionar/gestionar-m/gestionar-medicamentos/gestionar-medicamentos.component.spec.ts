import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GestionarMedicamentosComponent } from './gestionar-medicamentos.component';

describe('GestionarMedicamentosComponent', () => {
  let component: GestionarMedicamentosComponent;
  let fixture: ComponentFixture<GestionarMedicamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionarMedicamentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionarMedicamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call agregarMedicamento when "Agregar" button is clicked', () => {
    spyOn(component, 'agregarMedicamento');
    const button = fixture.nativeElement.querySelector('.action-button:nth-child(1)');
    button.click();
    expect(component.agregarMedicamento).toHaveBeenCalled();
  });

  it('should call modificarMedicamento when "Modificar" button is clicked', () => {
    spyOn(component, 'modificarMedicamento');
    const button = fixture.nativeElement.querySelector('.action-button:nth-child(2)');
    button.click();
    expect(component.modificarMedicamento).toHaveBeenCalled();
  });

  it('should call eliminarMedicamento when "Eliminar" button is clicked', () => {
    spyOn(component, 'eliminarMedicamento');
    const button = fixture.nativeElement.querySelector('.action-button:nth-child(3)');
    button.click();
    expect(component.eliminarMedicamento).toHaveBeenCalled();
  });

  it('should call volver when "Volver" button is clicked', () => {
    spyOn(component, 'volver');
    const button = fixture.nativeElement.querySelector('.back-button');
    button.click();
    expect(component.volver).toHaveBeenCalled();
  });
});

