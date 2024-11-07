import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotivoRechazoComponent } from './motivo-rechazo.component';

describe('MotivoRechazoComponent', () => {
  let component: MotivoRechazoComponent;
  let fixture: ComponentFixture<MotivoRechazoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MotivoRechazoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MotivoRechazoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
