import { Component } from '@angular/core';
import { Project } from '../../models';

@Component({
  selector: 'ric-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent {
  projects: Project[] = [
    { heading: 'Authorised Signatures', time: 'Mar 2022', techStack: ['dotnet core', 'API', 'Angular', 'OpenAPI'], shortDescription: '' }
  ];
}
