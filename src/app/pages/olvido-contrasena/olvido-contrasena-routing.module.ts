import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OlvidoContrasenaPage } from './olvido-contrasena.page'; // Asegúrate de importar la página
import { HomePage } from '../home/home.page';

const routes: Routes = [
  {
    path: '',
    component: OlvidoContrasenaPage
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OlvidoContrasenaPageRoutingModule {}
