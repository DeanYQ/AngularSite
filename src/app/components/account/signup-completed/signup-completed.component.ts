import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AfterViewInit, ViewChild } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'signup-completed',
    templateUrl: './signup-completed.component.html',
    styleUrls: ['./signup-completed.component.css']
})
export class SignupCompletedComponent implements OnInit, OnDestroy {

    constructor(
    private route: ActivatedRoute,
    private router: Router,
    ) { }

    intervalId = 0;
    seconds = 20;
    message = 'Navigate to the home page';

    clearTimer() { clearInterval(this.intervalId); }
    ngOnInit()    { this.countDown(); }
    ngOnDestroy() { this.clearTimer(); }

    private countDown() {
        this.clearTimer();
        this.intervalId = window.setInterval(() => {
          this.seconds -= 1;
          if (this.seconds === 0) {
            this.message = 'Navigate to the home page';
            this.DoNavigation();
          } else {
            if (this.seconds < 0) { this.seconds = 10; } // reset
            this.message = `Navigate to the home page (${this.seconds})`;
          }
        }, 1000);
      }

      DoNavigation(): void {
        this.router.navigate(['index']);
    }
}
