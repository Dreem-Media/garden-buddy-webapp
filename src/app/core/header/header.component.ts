import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/api/models/user';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {
  public currentUserToken!: User;
  public resetMode!: boolean;

  private userSubscription!: Subscription;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    public userService: UserService
  ) {}

  ngOnInit(): void {
    this.userSubscription = this.authenticationService.currentUser.subscribe(
      (userToken) => (this.currentUserToken = userToken)
    );
  }

  ngOnDestroy(): void {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }

  logout(): void {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
