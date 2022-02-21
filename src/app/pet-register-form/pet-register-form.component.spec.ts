import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetRegisterFormComponent } from './pet-register-form.component';

describe('PetRegisterFormComponent', () => {
  let component: PetRegisterFormComponent;
  let fixture: ComponentFixture<PetRegisterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetRegisterFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetRegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
