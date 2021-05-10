import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoAltaComponent } from './components/producto-alta/producto-alta.component';
import { ProductoListadoComponent } from './components/producto-listado/producto-listado.component';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { LoginComponent } from './components/login/login.component';
import { PeliculaAltaComponent } from './components/pelicula-alta/pelicula-alta.component';
import { PeliculaListadoComponent } from './components/pelicula-listado/pelicula-listado.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: BienvenidaComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'email-verification', component: VerifyEmailComponent },
  { path: 'bienvenido', component: BusquedaComponent },
  { path: 'busqueda', component: BusquedaComponent, canActivate: [AuthGuard] },
  {
    path: 'peliculas', children: [
      { path: 'alta', component: PeliculaAltaComponent },
      { path: 'listado', component: PeliculaListadoComponent }
    ], canActivate: [AuthGuard]
  },
  {
    path: 'producto', children: [
      { path: 'alta', component: ProductoAltaComponent },
      { path: 'listado', component: ProductoListadoComponent }
    ], canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
