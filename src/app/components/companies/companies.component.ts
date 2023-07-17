import { Component } from '@angular/core';
import { Project } from '../../models';
import { ValueService } from 'src/app/services/value.service';

@Component({
  selector: 'ric-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent {
  constructor(public ser: ValueService) { }
}
