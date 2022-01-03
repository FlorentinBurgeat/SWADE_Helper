import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartyPageComponent } from './components/party-page/party-page.component';

const routes: Routes = [
  {path: ':id', component: PartyPageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartyRoutingModule { }
