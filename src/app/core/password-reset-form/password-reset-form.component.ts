import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/_services/user.service';
import { AlertsService } from 'src/app/_services/alerts.service';
import { UserManagementControllerService } from 'src/app/api/services';

@Component({
  selector: 'app-password-reset-form',
  templateUrl: './password-reset-form.component.html',
})
export class PasswordResetFormComponent implements OnInit {
  public formModel: any = {};

  constructor(
    private route: ActivatedRoute,
    private apiUserService: UserManagementControllerService,
    private alerts: AlertsService
  ) {}

  ngOnInit(): void {}

  onPasswordChangeRequest(): void {
    this.formModel.resetKey = this.route.snapshot.queryParamMap.get('resetKey');
    console.log('this.formModel', this.formModel);
    this.apiUserService.resetPasswordFinish({ body: this.formModel }).subscribe(() => {
      this.alerts.sendMessage('Password Reset Complete');
    });
  }
}
