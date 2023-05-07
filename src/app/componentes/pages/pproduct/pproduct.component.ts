import {Component, OnInit, HostListener} from '@angular/core';
import {ServicioJositoService} from "../../../servicio-josito.service"
import {Firestore, collection, collectionData, doc} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getDoc } from "firebase/firestore";

@Component({
  selector: 'app-pproduct',
  templateUrl: './pproduct.component.html',
  styleUrls: ['./pproduct.component.css']
})
export class PproductComponent{



  current: number = 0;
  user: any;
  actualuser$: Observable<any[]> | null = null; // inicializando con null

  //fin variables usuario
  public userFirebase: any;


  constructor(private js: ServicioJositoService, private firestore: Firestore, public auth: AngularFireAuth) {
    this.js.loadScript();
    this.auth.authState.subscribe(user => {
      console.log(this.actualuser$);
      this.user = user;
      if (this.user) {
        this.getProductData(this.user);
      }
    });

  }

  versionMovil: boolean = false;
  arrayDatos?: string[];
  userData?: any;
  @HostListener('window:resize', ['$event'])
  onWindowResize(event: any) {
    this.versionMovil = window.innerWidth < 768;
    console.log("patata");
  }

  async getProductData(user: any) {
    const productDocRef = doc(this.firestore, `productos/xG0I9M7lRvJm3ASRbYlQ`);

    const productDocSnapshot = await getDoc(productDocRef);
    this.userData= productDocSnapshot.data();
    console.log(this.userData);
    this.arrayDatos = this.userData["msi_rtx_3080_ti"];

  }
}
