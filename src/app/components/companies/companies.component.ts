import { Component } from '@angular/core';

@Component({
  selector: 'ric-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent {
  projects: string[] = ['proj1', 'proj2', 'proj3', 'proj4'];
}
