import { NgModule } from '@angular/core';

import { PersonnagesRoutingModule } from './personnages-routing.module';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    PersonnagesRoutingModule
  ]
})
export class PersonnagesModule { }
