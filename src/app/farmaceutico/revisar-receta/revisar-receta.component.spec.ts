import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisarRecetaComponent } from './revisar-receta.component';

describe('RevisarRecetaComponent', () => {
  let component: RevisarRecetaComponent;
  let fixture: ComponentFixture<RevisarRecetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RevisarRecetaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RevisarRecetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
