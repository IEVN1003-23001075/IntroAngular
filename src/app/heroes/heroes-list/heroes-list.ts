
import { Component } from '@angular/core';
import { IHeroe } from '../heroe';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  templateUrl: './heroes-list.html',
  styleUrl: './heroes-list.css',
})
export class HeroesList {

  imageWidth: number = 40;
  imageMargin: number = 2;
  muestraImagen: boolean = true;
  listFilter: string = '';

  showImage(): void {
    this.muestraImagen = !this.muestraImagen;
  }

  heroes: IHeroe[] = [
    {
      imagen: 'https://dragonball-api.com/characters/goku_normal.webp',
      nombre: 'Goku',
      descripcion: 'Kame hame ha',
      race: 'Saiyan',
      ki: 9000
    },
    {
      imagen: 'https://dragonball-api.com/characters/vegeta_normal.webp',
      nombre: 'Vegeta',
      descripcion: 'Resplandor Final',
      race: 'Saiyan',
      ki: 15000
    },
    {
      imagen: 'https://dragonball-api.com/transformaciones/gogeta.webp',
      nombre: 'Gogeta',
      descripcion: 'Polvo Estelar',
      race: 'Saiyan-male',
      ki: 250000
    },
    {
      imagen: 'https://dragonball-api.com/characters/gohan.webp',
      nombre: 'Gohan',
      descripcion: 'Masenko',
      race: 'Saiyan',
      ki: 8000
    }
  ];

}