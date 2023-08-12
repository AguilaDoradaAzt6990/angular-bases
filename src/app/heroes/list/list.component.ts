import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroesNames: string[] = ['SpiderMan','Iron Man', 'Hulk','Pantera Negra'];
  public deletedHero?:string; //con ? hago la propiedad opcional y me quite el error de inicializar

  removeLastHero(): void {
    //Remueve primer elemento de un arreglo y regresa el elemento borrado
    //this.heroesNames.shift();

    //Remueve ultimo elemento de un arreglo y regresa el elemento borrado
    this.deletedHero = this.heroesNames.pop();    
  }

}
