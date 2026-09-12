import { Component } from '@angular/core';

@Component({
  selector: 'app-opera-bas',
  templateUrl: './opera-bas.html',
  styleUrl: './opera-bas.css',
  standalone: false
})
export class OperasBas {

  num1: number = 0;
  num2: number = 0;

  operacion: string = '';

  resultado: number | null = null;

  /*
  sumar(): void {
    this.resultado = this.num1 + this.num2;
  }

  restar(): void {
    this.resultado = this.num1 - this.num2;
  }

  multiplicar(): void {
    this.resultado = this.num1 * this.num2;
  }

  dividir(): void {
    this.resultado = this.num1 / this.num2;
  }
  */

  calcular(): void {

    if (this.operacion === 'suma') {
      this.resultado = this.num1 + this.num2;
    }

    else if (this.operacion === 'resta') {
      this.resultado = this.num1 - this.num2;
    }

    else if (this.operacion === 'multiplicacion') {
      this.resultado = this.num1 * this.num2;
    }

    else if (this.operacion === 'division') {

      if (this.num2 === 0) {
        this.resultado = null;
        alert('No se puede dividir entre cero');
        return;
      }

      this.resultado = this.num1 / this.num2;
    }

  }

}