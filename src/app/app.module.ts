import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  FooterComponent, HeaderComponent,
  HolderComponent, PersonalComponent
} from './components';
import { AppConfig } from './models';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HolderComponent,
    PersonalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{ provide: 'AppConfig', useValue: { assetsPath: '/assets/' } }],
  bootstrap: [AppComponent]
})
export class AppModule { }
