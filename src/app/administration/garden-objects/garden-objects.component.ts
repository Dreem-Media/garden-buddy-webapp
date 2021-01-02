import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';

import { GardenObject } from 'src/app/_models/garden-object';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/core/confirmation-dialog/confirmation-dialog.component';
import { ConfirmType } from 'src/app/core/confirmation-dialog/confirmation-type.model';
import { AlertsService } from 'src/app/_services/alerts.service';
import { GardenObjectsService } from 'src/app/_services/garden-objects.service';
import { LoadingService } from 'src/app/_services/loading.service';
import { SuggestionsService } from 'src/app/_services/suggestions.service';
import { Suggestion } from 'src/app/_models/suggestion.model';


@Component({
  selector: 'app-garden-objects',
  templateUrl: './garden-objects.component.html'
})
export class GardenObjectsComponent implements OnInit {

  public searchTerm = '';

  public displayedColumns: string[] = ['title', 'description', 'tasks', 'edit'];
  public gardenObjects = new MatTableDataSource<GardenObject>();
  public gardenObjectsCount: number = 0;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatTable, { static: true }) table!: MatTable<any>;

  public displayedColumnsSuggestions: string[] = ['title', 'description', 'edit'];
  public suggestions: Suggestion[] = [];
  @ViewChild(MatPaginator, { static: true }) paginatorSuggestion!: MatPaginator;
  @ViewChild(MatTable, { static: true }) tableSuggestion!: MatTable<any>;

  constructor(
    private service: GardenObjectsService,
    private suggestionService: SuggestionsService,
    public dialog: MatDialog,
    private router: Router,
    private alerts: AlertsService,
    public loadingService: LoadingService
  ) { }

  ngOnInit() {
    this.gardenObjects.paginator = this.paginator;
    this.getGardenObjects();
    this.getSuggestions();
  }

  getGardenObjects(page?: number) {
    this.loadingService.loading = true;
    this.service.getGardenObjectsCount(this.searchTerm).subscribe((count: any) => {
      this.gardenObjectsCount = count.count;
      this.service.getGardenObjects(page, this.searchTerm).subscribe((data: GardenObject[]) => {
        this.table.dataSource = data;
        this.loadingService.loading = false;
      });
    });
  }

  getSuggestions(page?: number) {
    this.loadingService.loading = true;
    this.suggestionService.getSuggestions(page).subscribe((suggestionData: Suggestion[]) => {
      this.suggestions = suggestionData;
      this.loadingService.loading = false;
    });
  }

  updatePage($event: PageEvent) {
    this.getGardenObjects($event.pageIndex || 0);
  }

  addNewGardenObject(element?: GardenObject | Suggestion): void {
    if (element) {
      this.router.navigate(['/administration/garden-objects/new'],
        { queryParams: { title: element.title, description: element.description, suggestionId: element.id } }
      );
    } else {
      this.router.navigate(['/administration/garden-objects/new']);
    }
  }

  openDeleteDialog(element: GardenObject): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        message: `Delete '${element.title}'`,
        type: ConfirmType.delete
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.service.deleteGardenObjectById(element.id!).subscribe(data => {
          this.getGardenObjects();
          this.alerts.sendMessage('Deleted');
        });
      }
    });
  }

  openDeleteDialogSuggestions(element: Suggestion): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        message: `Delete '${element.title}'`,
        type: ConfirmType.delete
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.suggestionService.deleteSuggestionById(element.id).subscribe(data => {
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
