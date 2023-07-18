import { Component, Input } from '@angular/core';

@Component({
  selector: 'ric-company-history',
  templateUrl: './company-history.component.html',
  styleUrls: ['./company-history.component.scss']
})
export class CompanyHistoryComponent {
  title: string;
  lst: Map<string, string>;

  edu = { title: 'Qualification', lst: new Map([['PES Institute of Technology (BE EEE)', 'graduated in 2012'], ['Shri Duttagiri Maharaj PU College', 'graduated in 2018'], ['Seventhday adventist high school', 'graduated in 2016']]) };
  emp = { title: 'Employement History', lst: new Map([['Danske IT', 'Jul 2020 till date'], ['CGI', 'May 2018 to Jul 2020'], ['HCL', 'Dec 2013 to May 2018']]) };

  constructor() { this.title = ''; this.lst = new Map<string, string>(); }
}
