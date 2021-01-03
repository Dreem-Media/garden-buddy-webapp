import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AlertsService } from 'src/app/_services/alerts.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { UserManagementControllerService } from 'src/app/api/services';

enum LoginMode {
  Login,
  Register,
  Forgot,
}

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
})
export class LoginRegisterComponent implements OnInit {
  public formModel: any = {};
  public loginMode: any = LoginMode;
  public mode!: LoginMode;

  private returnUrl: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alerts: AlertsService,
    private apiUserService: UserManagementControllerService
  ) {
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.mode = LoginMode.Login;
    const paramRequest = 'returnUrl';
    this.returnUrl = this.route.snapshot.queryParams[paramRequest] || '/';

    const modeParams = this.route.snapshot.queryParams.mode;
    if (modeParams && modeParams === 'register') {
      this.changeMode(this.loginMode.Register);
    }
  }

  changeMode(mode: LoginMode): void {
    this.formModel = {};
    this.mode = mode;
  }

  onLoginSubmit(): void {
    this.authenticationService
      .login(this.formModel.email.toLowerCase(), this.formModel.password)
      .pipe(first())
      .subscribe(
        () => {
          this.router.navigate([this.returnUrl]);
        },
        (error: HttpErrorResponse) => {
          this.alerts.sendMessage(
            error.message || (error.error && error.error.message)
          );
        }
      );
  }

  onRegisterSubmit(): void {
    const userToPost = this.formModel;
    delete userToPost.confirmPassword;
    delete userToPost.acceptTerms;
    userToPost.email = userToPost.email.toLowerCase();

    this.apiUserService.create({ body: userToPost }).subscribe(() => {
      this.alerts.sendMessage('Fantastic! Now lets login');
      this.changeMode(this.loginMode.Login);
    });
  }

  onPasswordResetRequest(): void {
    const userPasswordResetRequest = this.formModel;
    userPasswordResetRequest.email = userPasswordResetRequest.email.toLowerCase();

    this.apiUserService
      .resetPasswordInit({ body: userPasswordResetRequest })
      .subscribe(() => {
        this.alerts.sendMessage(
          'If this username exists, you will get an email'
        );
        this.changeMode(this.loginMode.Login);
      });
  }
}
