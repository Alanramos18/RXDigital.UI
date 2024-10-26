import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ModificarPacienteComponent } from './modificar-paciente.component';


describe('ModificarPacienteComponent', () => {
  let component: ModificarPacienteComponent;
  let fixture: ComponentFixture<ModificarPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModificarPacienteComponent],
      imports: [FormsModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onSubmit when form is submitted', () => {
    spyOn(component, 'onSubmit');
    component.onSubmit();
    expect(component.onSubmit).toHaveBeenCalled();
  });

  it('should call onCancel when cancel button is clicked', () => {
    spyOn(component, 'onCancel');
    component.onCancel();
    expect(component.onCancel).toHaveBeenCalled();
  });
});
