import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccineCrudComponent } from './vaccine-crud.component';

describe('VaccineCrudComponent', () => {
  let component: VaccineCrudComponent;
  let fixture: ComponentFixture<VaccineCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccineCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccineCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
