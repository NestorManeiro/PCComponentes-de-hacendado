import { Injectable } from '@angular/core';
import {Firestore, collection, collectionData, doc} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getDoc } from "firebase/firestore";

import firebase from "firebase/compat/app";
import 'firebase/compat/storage';
import {environment} from "../../environments/environment";

firebase.initializeApp(environment.firebaseConfig);
@Injectable({
  providedIn: 'root'
})
export class AlmacénService {
  storageRef = firebase.app().storage().ref();
  constructor() { }

  async subirImagen(nombre:string, imgBase64:any){
    try {
      let respuesta = await this.storageRef.child(nombre).putString(imgBase64, 'data_url');
      console.log(respuesta);
      return await respuesta.ref.getDownloadURL();
    }catch (err){
      console.log(err);
      return null;
    }
  }

}
