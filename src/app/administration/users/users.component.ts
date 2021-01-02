import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { Router } from '@angular/router';

import { ConfirmationDialogComponent } from 'src/app/core/confirmation-dialog/confirmation-dialog.component';
import { ConfirmType } from 'src/app/core/confirmation-dialog/confirmation-type.model';
import { UserService } from 'src/app/_services/user.service';
import { AlertsService } from 'src/app/_services/alerts.service';
import { LoadingService } from 'src/app/_services/loading.service';
import { UserManagementControllerService } from 'src/app/api/services';
import { User } from 'src/app/api/models/user';
import { CoreHelpersService } from 'src/app/_services/core-helpers.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
})
export class UsersComponent implements OnInit {
  public displayedColumns: string[] = ['name', 'email', 'roles', 'edit'];
  public users = new MatTableDataSource<User[]>();
  public userCount: number = 0;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatTable, { static: true }) table!: MatTable<any>;

  public searchTerm = '';

  constructor(
    private apiUserService: UserManagementControllerService,
    public dialog: MatDialog,
    public router: Router,
    private alerts: AlertsService,
    public loadingService: LoadingService,
    private coreHelpers: CoreHelpersService
  ) {}

  ngOnInit() {
    this.users.paginator = this.paginator;
    this.getUsers();
  }

  getUsers(page?: number) {
    this.loadingService.loading = true;
    const params = this.coreHelpers.getCountParams(this.searchTerm, 'user');
    this.apiUserService.count(params).subscribe(
      (count: any) => {
        this.userCount = count.count;
        const params = this.coreHelpers.getSerachPaginationParams(
          page,
          this.searchTerm,
          'user'
        );
        this.apiUserService.find(params).subscribe((data: User[]) => {
          this.table.dataSource = data;
          this.loadingService.loading = false;
        });
      },
      () => (this.loadingService.loading = false)
    );
  }

  updatePage($event: PageEvent) {
    this.getUsers($event.pageIndex || 0);
  }

  addNewUser(): void {
    this.router.navigate(['/administration/users/new']);
  }

  openDeleteDialog(element: User): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        message: `Delete '${element.firstName}'`,
        type: ConfirmType.delete,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const userId = element.id!;
        this.apiUserService.deleteById({ userId }).subscribe(() => {
          this.alerts.sendMessage('Deleted');
          this.updatePage({ pageIndex: 0, pageSize: 25, length: 0 });
        });
      }
    });
  }

  searchForUser() {
    this.getUsers();
  }
}
