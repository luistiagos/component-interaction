import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown-local-var-parent',
  template: `
    <h3>Countdown to Liftoff (via local variable)</h3>
    <button (click)="timer.start()">Start</button>
    <button (click)="timer.stop()">Stop</button>
    <div class="seconds">{{timer.seconds}}</div>
    <app-countdown-timer #timer></app-countdown-timer>
  `,
  styles: [`
    .seconds {
      background-color: black;
      color: red;
      font-size: 3em;
      margin: 0.3em 0;
      text-align: center;
      width: 1.5em;
    }    
  `]
})
export class CountdownLocalVarParentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}