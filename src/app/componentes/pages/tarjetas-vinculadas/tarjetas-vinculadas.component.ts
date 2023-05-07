import {Component, OnInit} from '@angular/core';
import {ImagenService} from "../../../service/imagen.service";

import {Firestore, collection, collectionData, doc} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getDoc } from "firebase/firestore";

@Component({
  selector: 'app-tarjetas-vinculadas',
  templateUrl: './tarjetas-vinculadas.component.html',
  styleUrls: ['./tarjetas-vinculadas.component.css']
})
export class TarjetasVinculadasComponent{

  current: number = 0;
  user: any;
  actualuser$: Observable<any[]> | null = null; // inicializando con null


  //datos de usuario
  card1?: string[] = [];
  //fin Datos usuarios
  //fin variables usuario
  public userFirebase: any;

  constructor(private imagen:ImagenService, private firestore: Firestore, public auth: AngularFireAuth) {
    this.auth.authState.subscribe(user => {
      console.log(this.actualuser$);
      this.user = user;
      if (this.user) {
        this.getUserData(this.user);
      }
    });
  }

  async getUserData(user: any) {
    const userDocRef = doc(this.firestore, `Usuarios/${user?.uid}`);
    const userDocCardsRef = doc(this.firestore, `Usuarios/${user?.uid}/cards/cardsList`);

    const userDocSnapshot = await getDoc(userDocRef);
    const userDocCardShot = await getDoc(userDocCardsRef);

    if (userDocSnapshot.exists()) {

      const userCard:any =  userDocCardShot.data();



      //tarjeta?
      this.card1 = userCard["card1"];
      console.log(this.card1);
    } else {
      console.log('El usuario no existe.');
    }
  }

}
