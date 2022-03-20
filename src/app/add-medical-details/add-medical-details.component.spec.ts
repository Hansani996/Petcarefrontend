import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMedicalDetailsComponent } from './add-medical-details.component';

describe('AddMedicalDetailsComponent', () => {
  let component: AddMedicalDetailsComponent;
  let fixture: ComponentFixture<AddMedicalDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMedicalDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMedicalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
