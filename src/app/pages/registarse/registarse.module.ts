import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistarsePageRoutingModule } from './registarse-routing.module';

import { RegistarsePage } from './registarse.page';

@NgModule({
imports: [
CommonModule,
FormsModule,
IonicModule,
RegistarsePageRoutingModule
],
declarations: [RegistarsePage]
})
export class RegistarsePageModule {}
