import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class AlertsService {
  constructor(private snackBar: MatSnackBar) {}

  public sendMessage(
    message: string,
    action?: string | undefined
  ): void {
    const snackBarRef = this.snackBar.open(message, action, { duration: 3000 });

    snackBarRef.afterDismissed().subscribe(() => {
      // The snack-bar was dismissed
    });
    snackBarRef.onAction().subscribe(() => {
      // The snack-bar action was triggered!
    });
  }
}
