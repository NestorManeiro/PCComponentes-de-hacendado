import {Component, Input} from '@angular/core';
import {ImagenService} from "../../../../service/imagen.service";
import {AlmacénService} from "../../../../service/almacén.service";
import * as url from "url";
import {Firestore, collection, collectionData, doc, setDoc, addDoc} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getDoc } from "firebase/firestore";
import {user} from "@angular/fire/auth";
import firebase from "firebase/compat";
import storage = firebase.storage;

@Component({
  selector: 'app-subir-imagen',
  templateUrl: './subir-imagen.component.html',
  styleUrls: ['./subir-imagen.component.css']
})
export class SubirImagenComponent {
  @Input() user2?:string;
  imagen2!:any;
  current: number = 0;
  user: any;
  actualuser$: Observable<any[]> | null = null; // inicializando con null

  /* variables del usuario*/

  nombreUser?: string;


  //datos de usuario
  card1?: string[] = [];
  //fin Datos usuarios
  //fin variables usuario
  public userFirebase: any;
  constructor(private imagen:ImagenService, private almacen:AlmacénService,private firestore: Firestore, public auth: AngularFireAuth) {
    this.auth.authState.subscribe(user => {
      console.log(this.actualuser$);
      this.user = user;
      if (this.user) {
        this.getUserData(this.user);
      }
    });
  }
  Popup_off(){
    this.imagen.$modal.emit(false);
  }

  async getUserData(user: any) {
    const userDocRef = doc(this.firestore, `Usuarios/${user?.uid}`);
    const userDocCardsRef = doc(this.firestore, `Usuarios/${user?.uid}/cards/cardsList`);

    const userDocSnapshot = await getDoc(userDocRef);
    const userDocCardShot = await getDoc(userDocCardsRef);

    if (userDocSnapshot.exists()) {
      const userData = userDocSnapshot.data();
      const userCard:any =  userDocCardShot.data();
      console.log(userData);
      console.log(userCard);
      this.nombreUser = userData["usuario"];
      //tarjeta?
      this.card1 = userCard["card1"];
      this.imagen.$card.emit(userCard["card1"]);
      console.log(this.card1);
    } else {
      console.log('El usuario no existe.');
    }
  }
  CargarImagen(event : any){
    let archivo = event.target.files;
    let reader = new FileReader();

    reader.readAsDataURL(archivo[0]);
    reader.onloadend = () => {
      this.imagen2 = reader.result;
      this.almacen.subirImagen(`${this.user.uid}`+"_"+Date.now(), reader.result).then(async urlImagen =>{
        console.log(urlImagen);

        await setDoc(doc(this.firestore, `Usuarios/${this.user.uid}`), {
          LastName: this.user.LastName,
          imgProfile: urlImagen,
          name: this.user.name,
          usuario: this.user.usuario
        });
      });
    }
  }
}
