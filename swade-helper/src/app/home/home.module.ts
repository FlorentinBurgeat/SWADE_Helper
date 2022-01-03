import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CreatePartyDialogComponent } from './components/create-party-dialog/create-party-dialog.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PartyCardComponent } from './components/party-card/party-card.component';
import { HomeRoutingModule } from './home-routing.module';



@NgModule({
  declarations: [
    CreatePartyDialogComponent,
    PartyCardComponent,
    HomePageComponent,
  ],
  imports: [
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
