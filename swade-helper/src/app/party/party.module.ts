import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PartyPageComponent } from './components/party-page/party-page.component';
import { PartyRoutingModule } from './party-routing.module';

@NgModule({
  declarations: [
    PartyPageComponent,
  ],
  imports: [
    SharedModule,
    PartyRoutingModule
  ]
})
export class PartyModule { }
