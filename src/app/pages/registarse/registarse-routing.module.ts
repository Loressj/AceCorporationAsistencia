import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistarsePage } from './registarse.page';


const routes: Routes = [
{
path: '',
component: RegistarsePage
}
];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule],
})
export class RegistarsePageRoutingModule {}
