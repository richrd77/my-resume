import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  FooterComponent, HeaderComponent,
  HolderComponent, PersonalComponent, CompanyHistoryComponent,
  CompaniesComponent, ProjectComponent,
} from './components';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HolderComponent,
    PersonalComponent,
    CompaniesComponent,
    ProjectComponent,
    CompanyHistoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSliderModule,
    MatButtonModule,
  ],
  providers: [{ provide: 'AppConfig', useValue: { assetsPath: '/assets/' } }],
  bootstrap: [AppComponent]
})
export class AppModule { }
