import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent {
  Lista_navegacion:String[] = ["Mi cuenta","Mis datos", "Opiniones","Pedidos y devoluciones", "Pedidos, devoluciones y facturas", "Pedidos cancelados", "Pagos", "Tarjetas vinculadas"];


}
