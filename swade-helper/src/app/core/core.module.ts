import {NgModule, Optional, SkipSelf} from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonnagesModule } from '../personnages/personnages.module';



@NgModule({
  declarations: [],
  imports: [
    PersonnagesModule
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if(parentModule) {
      throw new Error('CoreModule is already loaded!')
    }
  }
}
