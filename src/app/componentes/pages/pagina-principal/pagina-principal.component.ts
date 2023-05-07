import {Component, OnInit} from '@angular/core';
import {JsService} from "../../../service/js.service";
@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent implements  OnInit{
  constructor(private js: JsService) {
    this.js.loadScript('','test.js');
  }
  ngOnInit() {

  }
}
