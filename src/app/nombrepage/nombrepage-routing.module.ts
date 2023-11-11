import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NombrepagePage } from './nombrepage.page';

const routes: Routes = [
  {
    path: '',
    component: NombrepagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NombrepagePageRoutingModule {}
