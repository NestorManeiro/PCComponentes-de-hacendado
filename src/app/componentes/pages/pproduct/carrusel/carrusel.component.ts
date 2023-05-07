import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})




export class CarruselComponent {

  @Input() arrayDatos?: String[];

}
