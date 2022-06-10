import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Calculadora';
  subtotal: string = '';
  operando1: number = 0;
  operando2: number = 0;
  total: number = 0;
  operacion: string = '';
  placeholder: string = '0';

  obtenerValor(event: Event) {
    this.subtotal += (<HTMLInputElement>event.target).value;
  }
  reiniciar(){
    this.placeholder = '0'
    this.subtotal = '';
  }
  borrar(){
    this.subtotal = this.subtotal.substring(0,(this.subtotal.length)-1)
  }
  suma(){
    this.placeholder = `${this.subtotal}+`;
    this.operando1 = parseFloat(this.subtotal);
    this.subtotal = '';
    this.operacion = '+'
    return this.operando2;
  }
  restar(){
    this.operando1 = parseFloat(this.subtotal);
    this.subtotal = '';
    this.operacion = '-'
    return this.subtotal;
  }
  multiplicar(){
    this.operando1 = parseFloat(this.subtotal);
    this.subtotal = '';
    this.operacion = '*'
    return this.subtotal;
  }
  dividir(){
    this.operando1 = parseFloat(this.subtotal);
    this.subtotal = '';
    this.operacion = '/'
    return this.subtotal;
  }
  resultado(){
    this.operando2 = parseFloat(this.subtotal);
    if(this.operacion == '+') {
      this.total = this.operando1 + this.operando2;
      this.subtotal = this.total.toString();
    } else if (this.operacion == '-') {
      this.total = this.operando1 - this.operando2;
      this.subtotal = this.total.toString();
    } else if (this.operacion == '/') {
      if(this.operando2 == 0){
        this.subtotal = 'No se puede dividir entre cero'
      } else {
        this.total = this.operando1 / this.operando2;
        this.subtotal = this.total.toString();
      }
      
    } else if (this.operacion == '*') {
      this.total = this.operando1 * this.operando2;
      this.subtotal = this.total.toString();
    }
    return this.subtotal; 
  }

}
