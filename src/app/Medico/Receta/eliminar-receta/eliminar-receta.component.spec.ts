import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarRecetaComponent } from './eliminar-receta.component';

describe('EliminarRecetaComponent', () => {
  let component: EliminarRecetaComponent;
  let fixture: ComponentFixture<EliminarRecetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EliminarRecetaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EliminarRecetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
