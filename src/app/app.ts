import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  // interpolacion de valores
  tittle: string = 'Zaid Isaac Sereno Hernandez'

  duplicarnumero(a:number):number{
    return a*2
  }

  pelicula={
    titulo: 'spiderman',
    fechalanzamiento: new Date(),
    precio: 250
  }
}
