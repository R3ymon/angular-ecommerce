import { Component, Input, SimpleChange, SimpleChanges } from '@angular/core';
import { RequiredValidator } from '@angular/forms';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  @Input({ required: true }) duration = 0;
  @Input({ required: true }) message = '';

  constructor() {
    ///corre solo una vez
    console.log('constructor');
    console.log('-'.repeat(10));
  }

  ngOnChanges(changes: SimpleChanges) {
    //corre antes y despues
    console.log('ngOnChanges');
    console.log('-'.repeat(10));
    console.log(changes);
  }
}
