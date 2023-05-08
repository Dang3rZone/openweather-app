import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './login.component';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Import FormsModule

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthService;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule], // Add FormsModule
      declarations: [LoginComponent],
      providers: [AuthService, { provide: Router, useValue: spy }],
    }).compileComponents();

    routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onSubmit', () => {
    it('should navigate to main page when login is successful', () => {
      spyOn(authService, 'login').and.returnValue(true);

      component.user = 'testuser';
      component.password = 'testpassword';
      component.onSubmit();

      expect(authService.login).toHaveBeenCalledWith(
        'testuser',
        'testpassword'
      );
      expect(routerSpy.navigate).toHaveBeenCalledWith(['/main']);
    });

    it('should display error message when login is unsuccessful', () => {
      spyOn(authService, 'login').and.returnValue(false);
      const errorMessage = 'Invalid username or password'; // Modify error message

      component.user = 'testuser';
      component.password = 'testpassword';
      component.onSubmit();

      expect(authService.login).toHaveBeenCalledWith(
        'testuser',
        'testpassword'
      );
      expect(routerSpy.navigate).not.toHaveBeenCalled();
      expect(component.errorMessage).toEqual(errorMessage);
    });
  });
});
