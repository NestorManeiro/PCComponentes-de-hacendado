import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagenService {
  $modal = new EventEmitter<any>();
  $card= new EventEmitter<any>();
}
