import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  FooterComponent, HeaderComponent,
  HolderComponent, PersonalComponent
} from './components';
import { CompaniesComponent } from './components/companies/companies.component';
import { ProjectComponent } from './components/project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HolderComponent,
    PersonalComponent,
    CompaniesComponent,
    ProjectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{ provide: 'AppConfig', useValue: { assetsPath: '/assets/' } }],
  bootstrap: [AppComponent]
})
export class AppModule { }
