import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OlvidoContrasenaPageRoutingModule } from './olvido-contrasena-routing.module';

import { OlvidoContrasenaPage } from './olvido-contrasena.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OlvidoContrasenaPageRoutingModule
  ],
  declarations: [OlvidoContrasenaPage]
})
export class OlvidoContrasenaPageModule {}
