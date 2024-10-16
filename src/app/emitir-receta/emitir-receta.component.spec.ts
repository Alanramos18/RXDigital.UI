import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmitirRecetaComponent } from './emitir-receta.component';

describe('EmitirRecetaComponent', () => {
  let component: EmitirRecetaComponent;
  let fixture: ComponentFixture<EmitirRecetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmitirRecetaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmitirRecetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
