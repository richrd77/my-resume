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
import { SkillExperienceComponent } from './components/skill-experience/skill-experience.component';
import { CompanyHistoryComponent } from './components/company-history/company-history.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HolderComponent,
    PersonalComponent,
    CompaniesComponent,
    ProjectComponent,
    SkillExperienceComponent,
    CompanyHistoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{ provide: 'AppConfig', useValue: { assetsPath: '/assets/' } }],
  bootstrap: [AppComponent]
})
export class AppModule { }
