import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/core/confirmation-dialog/confirmation-dialog.component';
import { ConfirmType } from 'src/app/core/confirmation-dialog/confirmation-type.model';
import { AlertsService } from 'src/app/_services/alerts.service';
import { LoadingService } from 'src/app/_services/loading.service';
import { GardenObjectManagementControllerService, GardenObjectSuggestionsManagementControllerService } from 'src/app/api/services';
import { GardenObject, GardenObjectSuggestion } from 'src/app/api/models';
import { CoreHelpersService } from 'src/app/_services/core-helpers.service';


@Component({
  selector: 'app-garden-objects',
  templateUrl: './garden-objects.component.html'
})
export class GardenObjectsComponent implements OnInit {

  public searchTerm = '';

  public displayedColumns: string[] = ['name', 'description', 'tasks', 'edit'];
  public gardenObjects = new MatTableDataSource<GardenObject>();
  public gardenObjectsCount: number = 0;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatTable, { static: true }) table!: MatTable<any>;

  public displayedColumnsSuggestions: string[] = ['name', 'description', 'edit'];
  public suggestions: GardenObjectSuggestion[] = [];
  @ViewChild(MatPaginator, { static: true }) paginatorSuggestion!: MatPaginator;
  @ViewChild(MatTable, { static: true }) tableSuggestion!: MatTable<any>;

  constructor(
    private apiGardenObjectService: GardenObjectManagementControllerService,
    private apiGardenSuggestionService: GardenObjectSuggestionsManagementControllerService,
    public dialog: MatDialog,
    private router: Router,
    private alerts: AlertsService,
    public loadingService: LoadingService,
    private coreHelpers: CoreHelpersService
  ) { }

  ngOnInit() {
    this.gardenObjects.paginator = this.paginator;
    this.getGardenObjects();
    this.getSuggestions();
  }

  getGardenObjects(page?: number) {
    this.loadingService.loading = true;
    const params = this.coreHelpers.getCountParams(this.searchTerm, 'user');
    this.apiGardenObjectService.count(params).subscribe((count: any) => {
      this.gardenObjectsCount = count.count;
      const sendParams = this.coreHelpers.getSerachPaginationParams(page, this.searchTerm, 'garden');
      this.apiGardenObjectService.find(sendParams).subscribe((data: GardenObject[]) => {
        this.table.dataSource = data;
        this.loadingService.loading = false;
      });
    });
  }

  getSuggestions(page?: number) {
    this.loadingService.loading = true;
    const params = this.coreHelpers.getSerachPaginationParams(page);
    this.apiGardenSuggestionService.find(params).subscribe((suggestionData: GardenObjectSuggestion[]) => {
      this.suggestions = suggestionData;
      this.loadingService.loading = false;
    });
  }

  updatePage($event: PageEvent) {
    this.getGardenObjects($event.pageIndex || 0);
  }

  addNewGardenObject(element?: GardenObject | GardenObjectSuggestion): void {
    if (element) {
      this.router.navigate(['/administration/garden-objects/new'],
        { queryParams: { name: element.name, description: element.description, suggestionId: element.id } }
      );
    } else {
      this.router.navigate(['/administration/garden-objects/new']);
    }
  }

  openDeleteDialog(element: GardenObject): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        message: `Delete '${element.name}'`,
        type: ConfirmType.delete
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result && element.id) {
        const id = element.id;
        this.apiGardenObjectService.deleteById({ id }).subscribe(data => {
          this.getGardenObjects();
          this.alerts.sendMessage('Deleted');
        });
      }
    });
  }

  openDeleteDialogSuggestions(element: GardenObjectSuggestion): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        message: `Delete '${element.name}'`,
        type: ConfirmType.delete
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result && element.id) {
        const id = element.id;
        this.apiGardenSuggestionService.deleteById({id}).subscribe(data => {
          this.getSuggestions();
          this.alerts.sendMessage('Deleted');
        });
      }
    });
  }

  searchForGardenObject() {
    this.getGardenObjects();
  }

}
