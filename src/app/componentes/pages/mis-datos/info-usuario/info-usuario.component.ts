import {Component, Input, Output} from '@angular/core';
import {ImagenService} from "../../../../service/imagen.service";

@Component({
  selector: 'app-info-usuario',
  templateUrl: './info-usuario.component.html',
  styleUrls: ['./info-usuario.component.css']
})
export class InfoUsuarioComponent {
  @Input() user?:string;
  constructor(private imagen:ImagenService) {
    console.log(this.user);
  }
  Popup_on(){
    this.imagen.$modal.emit(true);
  }

}
