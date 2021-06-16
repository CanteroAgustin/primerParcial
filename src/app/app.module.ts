import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { PeliculaAltaComponent } from './components/pelicula-alta/pelicula-alta.component';
import { ProductoAltaComponent } from './components/producto-alta/producto-alta.component';
import { ProductoListadoComponent } from './components/producto-listado/producto-listado.component';
import { PeliculaListadoComponent } from './components/pelicula-listado/pelicula-listado.component';
import { TablaPeliculaComponent } from './components/tabla-pelicula/tabla-pelicula.component';
import { DetallePeliculaComponent } from './components/detalle-pelicula/detalle-pelicula.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PaisesComponent } from './components/paises/paises.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { TablaPaisesComponent } from './components/tabla-paises/tabla-paises.component';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { AuthService } from './services/auth.service';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ProductoDetalleComponent } from './components/producto-detalle/producto-detalle.component';
import { DetallePaisComponent } from './components/detalle-pais/detalle-pais.component';
import { ContainerListComponent } from './components/container-list/container-list.component';
import { ContainerAbmComponent } from './components/container-abm/container-abm.component';
import { ContainerAltaComponent } from './components/container-alta/container-alta.component';
import { ContainerUpdateComponent } from './components/container-update/container-update.component';
import { ContainerDeleteComponent } from './components/container-delete/container-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    BusquedaComponent,
    PeliculaAltaComponent,
    ProductoAltaComponent,
    ProductoListadoComponent,
    PeliculaListadoComponent,
    TablaPeliculaComponent,
    DetallePeliculaComponent,
    PaisesComponent,
    TablaPaisesComponent,
    BienvenidaComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    ProductoDetalleComponent,
    DetallePaisComponent,
    ContainerListComponent,
    ContainerAbmComponent,
    ContainerAltaComponent,
    ContainerUpdateComponent,
    ContainerDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FontAwesomeModule
  ],
  providers: [AuthService, ProductoAltaComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
