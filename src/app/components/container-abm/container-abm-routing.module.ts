import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerAbmComponent } from './container-abm.component';

const routes: Routes = [
  {
    path: '',
    component: ContainerAbmComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContainerAbmRoutingModule { }
