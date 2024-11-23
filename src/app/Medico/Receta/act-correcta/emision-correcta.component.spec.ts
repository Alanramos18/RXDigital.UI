import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizacionCorrectaComponent } from './act-correcta.component';

describe('EmisionCorrectaComponent', () => {
  let component: ActualizacionCorrectaComponent;
  let fixture: ComponentFixture<ActualizacionCorrectaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActualizacionCorrectaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActualizacionCorrectaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
