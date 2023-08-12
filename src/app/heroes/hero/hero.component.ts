import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name:string = 'SpiderMan';
  public age: number = 45;

  //los metodos get a la hora de la interpolacion se agregar en las {{ }} como una variable
  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero():void {
    this.name = 'Iron Man';
  }

  changeAge(): void {
    this.age = 21;
  }

  resetForm(): void {
    this.name = 'SpiderMan';
    this.age = 45;    
  }

}
