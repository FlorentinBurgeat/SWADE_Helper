import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CreatePartyDialogComponent } from './components/home-page/create-party-dialog/create-party-dialog.component';

@NgModule({
  declarations: [
    HomePageComponent,
    AppComponent,
    CreatePartyDialogComponent
  ],
  imports: [
    CoreModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
