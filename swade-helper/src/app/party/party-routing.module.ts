import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateExtraPageComponent } from './components/create-extra-page/create-extra-page.component';
import { CreateJokerPageComponent } from './components/create-joker-page/create-joker-page.component';
import { PartyPageComponent } from './components/party-page/party-page.component';

const routes: Routes = [
  {path: ':id', component: PartyPageComponent},
  {path: ':id/create-joker-pj', component: CreateJokerPageComponent},
  {path: ':id/create-joker-pnj', component: CreateJokerPageComponent},
  {path: ':id/create-extra', component: CreateExtraPageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartyRoutingModule { }
