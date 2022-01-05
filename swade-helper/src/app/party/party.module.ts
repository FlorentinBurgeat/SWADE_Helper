import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PartyPageComponent } from './components/party-page/party-page.component';
import { PartyRoutingModule } from './party-routing.module';
import { PersonnagesCardComponent } from './components/personnages-card/personnages-card.component';
import { SelectPersonnageFormDialogComponent } from './components/select-personnage-form-dialog/select-personnage-form-dialog.component';
import { CreateJokerPageComponent } from './components/create-joker-page/create-joker-page.component';
import { CreateExtraPageComponent } from './components/create-extra-page/create-extra-page.component';

@NgModule({
  declarations: [
    PartyPageComponent,
    PersonnagesCardComponent,
    SelectPersonnageFormDialogComponent,
    CreateJokerPageComponent,
    CreateExtraPageComponent,
  ],
  imports: [
    SharedModule,
    PartyRoutingModule
  ]
})
export class PartyModule { }
