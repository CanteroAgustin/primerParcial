import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { BusquedaComponent } from './busqueda.component';

const routes: Routes = [
  {
    path: '',
    component: BusquedaComponent, canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusquedaRoutingModule { }
