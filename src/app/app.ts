import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: false
})
export class App {

  // Interpolación de valores
  tittle: string = 'Zaid Isaac Sereno Hernandez';

  duplicarnumero(a: number): number {
    return a * 2;
  }

  pelicula = {
    titulo: 'spiderman',
    fechalanzamiento: new Date(),
    precio: 250
  };

}