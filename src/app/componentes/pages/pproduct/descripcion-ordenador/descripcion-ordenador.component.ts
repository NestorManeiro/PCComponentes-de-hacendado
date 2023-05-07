import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-descripcion-ordenador',
  templateUrl: './descripcion-ordenador.component.html',
  styleUrls: ['./descripcion-ordenador.component.css']
})
export class DescripcionOrdenadorComponent {

  @Input() arrayDatos?: String[];

  features: boolean = true;
  questions: boolean = false;
  videos: boolean = false;
  comments: boolean = false;

  mostrar_features(){
    this.features = true;
    this.questions = false;
    this.videos = false;
    this.comments = false;
  }

  mostrar_comments(){
    this.features = false;
    this.questions = false;
    this.videos = false;
    this.comments = true;
  }

  mostrar_videos(){
    this.features = false;
    this.questions = false;
    this.videos = true;
    this.comments = false;
  }

  mostrar_questions(){
    this.features = false;
    this.questions = true;
    this.videos = false;
    this.comments = false;
  }


}
