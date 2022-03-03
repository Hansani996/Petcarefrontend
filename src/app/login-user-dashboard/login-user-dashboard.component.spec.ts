import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginUserDashboardComponent } from './login-user-dashboard.component';

describe('LoginUserDashboardComponent', () => {
  let component: LoginUserDashboardComponent;
  let fixture: ComponentFixture<LoginUserDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginUserDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginUserDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
