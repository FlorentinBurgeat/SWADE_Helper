import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="app-root">

  </div>
    <mat-toolbar color="primary">
        <span>Savage Worlds Helper</span>
    </mat-toolbar>
    <router-outlet></router-outlet>
  `,
    styles: [`
    :host {
      display: flex;
      flex-flow: column nowrap;
      align-items: stretch;
      height: 100%;
      background-color: #EEEEEE;
    }
  `]
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
