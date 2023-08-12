import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-counter',
    templateUrl: 'counter.component.html'
})
export class CounterComponent {
    constructor() { }

    public counter:number = 10;

    increaseBy(value:number): void {
      this.counter += value;
    }
  
    restValues(){
      this.counter = 10;
    }    
    
}