import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name-parent',
  template: `
    <h2>Master controls {{names.length}} names</h2>
    <app-name-child *ngFor="let name of names" [name]="name"></app-name-child>
  `,
  styles: []
})
export class NameParentComponent implements OnInit {

  // Displays 'Mr. IQ', '<no name set>', 'Bombasto'
  names = ['Mr. IQ', '   ', '  Bombasto  '];

  constructor() { }

  ngOnInit() {
  }

}