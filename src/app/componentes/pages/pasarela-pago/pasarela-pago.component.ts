import { Component } from '@angular/core';

@Component({
  selector: 'app-pasarela-pago',
  templateUrl: './pasarela-pago.component.html',
  styleUrls: ['./pasarela-pago.component.css']
})
export class PasarelaPagoComponent {
  fase_pago: number = 0;

  avanzar(){
    this.fase_pago++;
  }

  retroceder(){
    this.fase_pago--;
  }
}
