import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { PeliculaAltaComponent } from './components/pelicula-alta/pelicula-alta.component';
import { PeliculaListadoComponent } from './components/pelicula-listado/pelicula-listado.component';
import { ProductoAltaComponent } from './components/producto-alta/producto-alta.component';
import { ProductoListadoComponent } from './components/producto-listado/producto-listado.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: BienvenidaComponent },
  { path: 'sign-in', loadChildren: () => import('./components/sign-in/sign-in.module').then(m => m.SignInModule) },
  { path: 'sign-up', loadChildren: () => import('./components/sign-up/sign-up.module').then(m => m.SignUpModule) },
  { path: 'forgot-password', loadChildren: () => import('./components/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule) },
  { path: 'email-verification', loadChildren: () => import('./components/verify-email/verify-email.module').then(m => m.VerifyEmailModule) },
  { path: 'busqueda', loadChildren: () => import('./components/busqueda/busqueda.module').then(m => m.BusquedaModule), canActivate: [AuthGuard] },
  { path: 'container', loadChildren: () => import('./components/container-abm/container-abm.module').then(m => m.ContainerAbmModule), canActivate: [AuthGuard] },
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
