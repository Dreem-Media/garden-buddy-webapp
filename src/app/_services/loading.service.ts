import { Injectable, OnDestroy } from '@angular/core';

/**
 * Dont want to share in the global loading service?
 * Add to providers to make this a non-singletons
 *
 * @Component({
 * selector: 'app-xxxxx',
 * templateUrl: './xxxxxx.component.html',
 * providers: [LoadingService]
 * })
 */

@Injectable({
  providedIn: 'root',
})
export class LoadingService implements OnDestroy {
  private localLoading!: boolean;
  private taskCount: number;

  constructor() {
    this.taskCount = 0;
  }

  ngOnDestroy(): void {
    this.localLoading = false;
    this.taskCount = 0;
  }

  public get loading(): boolean {
    return this.localLoading;
  }

  public set loading(value: boolean) {
    if (value) {
      this.pushTask();
    } else {
      this.popTask();
    }
  }

  private pushTask(): void {
    this.taskCount++;
    this.localLoading = this.taskCount !== 0;
  }

  private popTask(): void {
    if (this.taskCount > 0) {
      this.taskCount--;
    }
    this.localLoading = this.taskCount !== 0;
  }
}
