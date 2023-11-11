import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NombrepagePageRoutingModule } from './nombrepage-routing.module';

import { NombrepagePage } from './nombrepage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NombrepagePageRoutingModule
  ],
  declarations: [NombrepagePage]
})
export class NombrepagePageModule {}
