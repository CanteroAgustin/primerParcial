import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { ProductoAltaComponent } from './components/producto-alta/producto-alta.component';
import { ProductoListadoComponent } from './components/producto-listado/producto-listado.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: BienvenidaComponent },
  { path: 'sign-in', loadChildren: () => import('./components/sign-in/sign-in.module').then(m => m.SignInModule) },
  { path: 'sign-up', loadChildren: () => import('./components/sign-up/sign-up.module').then(m => m.SignUpModule) },
  { path: 'forgot-password', loadChildren: () => import('./components/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule) },
  { path: 'email-verification', loadChildren: () => import('./components/verify-email/verify-email.module').then(m => m.VerifyEmailModule) },
  { path: 'busqueda', loadChildren: () => import('./components/busqueda/busqueda.module').then(m => m.BusquedaModule), canActivate: [AuthGuard] },
  { path: 'container', loadChildren: () => import('./components/container-abm/container-abm.module').then(m => m.ContainerAbmModule), canActivate: [AuthGuard] },
  { path: 'cargar-container', loadChildren: () => import('./components/cargar-container/cargar-container.module').then(m => m.CargarContainerModule), canActivate: [AuthGuard] },
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
