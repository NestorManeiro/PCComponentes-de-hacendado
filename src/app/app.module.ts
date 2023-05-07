import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {RouterModule, Routes, ɵEmptyOutletComponent} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { PaginaPrincipalComponent } from './componentes/pages/pagina-principal/pagina-principal.component';
import { MisDatosComponent } from './componentes/pages/mis-datos/mis-datos.component';
import { OpinionesComponent } from './componentes/pages/opiniones/opiniones.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { LoginComponent } from './componentes/pages/login/login.component';
import { RegisterComponent } from './componentes/pages/register/register.component';
import { PDFComponent } from './componentes/pages/pdf/pdf.component';
import { PedidosCanceladosComponent } from './componentes/pages/pedidos-cancelados/pedidos-cancelados.component';
import { TarjetasVinculadasComponent } from './componentes/pages/tarjetas-vinculadas/tarjetas-vinculadas.component';
import { NavegacionComponent } from './componentes/pages/navegacion/navegacion.component';

import { MontarPcComponent } from './componentes/pages/montar-pc/montar-pc.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { InfoUsuarioComponent } from './componentes/pages/mis-datos/info-usuario/info-usuario.component';
import { SubirImagenComponent } from './componentes/pages/mis-datos/subir-imagen/subir-imagen.component';
import { PproductComponent } from './componentes/pages/pproduct/pproduct.component';
import {CarruselComponent} from "./componentes/pages/pproduct/carrusel/carrusel.component";
import {
  DescripcionOrdenadorComponent
} from "./componentes/pages/pproduct/descripcion-ordenador/descripcion-ordenador.component";
import {DescripcionMovilComponent} from "./componentes/pages/pproduct/descripcion-movil/descripcion-movil.component";
import {PasarelaPagoComponent} from "./componentes/pages/pasarela-pago/pasarela-pago.component";
import {Paso1Component} from "./componentes/pages/pasarela-pago/paso1/paso1.component";
import {Paso2Component} from "./componentes/pages/pasarela-pago/paso2/paso2.component";
import {Paso3Component} from "./componentes/pages/pasarela-pago/paso3/paso3.component";
import {Paso4Component} from "./componentes/pages/pasarela-pago/paso4/paso4.component";
import {Paso5Component} from "./componentes/pages/pasarela-pago/paso5/paso5.component";

const appRoute: Routes = [
  {path: '', redirectTo:'Home', pathMatch:'full'},
  {path: 'Home', component:PaginaPrincipalComponent},
  {path: 'mis_datos', component:MisDatosComponent},
  {path: 'opiniones', component:OpinionesComponent},
  {path: 'login', component:LoginComponent},
  {path: 'PDF', component: PDFComponent},
  {path: 'Pedidos-Cancelados', component:PedidosCanceladosComponent},
  {path: 'Tarjetas-Vinculadas', component: TarjetasVinculadasComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'montar_pc', component:MontarPcComponent},
  {path: 'pproduct', component:PproductComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PaginaPrincipalComponent,
    MisDatosComponent,
    OpinionesComponent,
    FooterComponent,
    PproductComponent,
    CarruselComponent,
    DescripcionOrdenadorComponent,
    DescripcionMovilComponent,
    PasarelaPagoComponent,
    Paso1Component,
    Paso2Component,
    Paso3Component,
    Paso4Component,
    Paso5Component,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    PDFComponent,
    PedidosCanceladosComponent,
    TarjetasVinculadasComponent,
    NavegacionComponent,
    RegisterComponent,
    MontarPcComponent,
    InfoUsuarioComponent,
    SubirImagenComponent,
    MontarPcComponent
  ],
  imports: [
    BrowserModule,
    ɵEmptyOutletComponent,
    NgOptimizedImage,
    RouterModule.forRoot(appRoute),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
