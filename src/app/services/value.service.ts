import { Injectable } from '@angular/core';
import { Project } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ValueService {

  constructor() { }

  public get PlainSkills(): string[] {
    return ['C#', '.NET framework & dotnet Core', 'Webforms, MVC with Views & API', 'EntityFramework & EF Core', 'Angular', 'HTML, CSS & JavaScript', 'SQL, MongoDB'];
  }

  public get Projects(): Project[] {
    return [
      { heading: 'Authorised Signatures', time: 'Mar 2022', techStack: ['dotnet core', 'API', 'SQL', 'Angular', 'OpenAPI', 'OpenShift', 'Docker', 'CI/CD', 'AzureDev ops', 'Git'], shortDescription: 'this Application is used to upload/crop the signature images and generate the signature collections in PDF format.' },
      { heading: 'Sickness Registration', time: 'Jun 2021', techStack: ['dotnet core', 'API Gateway', 'AzureDev ops', 'Git'], shortDescription: 'this Application is used to report employee absent and an email notification to be sent out to concerned audience.' },
      { heading: 'HR Documents', time: 'Feb 2021', techStack: ['.NET Framework', 'Web service', 'SQL', 'Git'], shortDescription: 'this Application is document repository for all the employee and their employment documentation, this application also supports automatic document upload.' },
      { heading: 'HCM Integration', time: 'Jul 2020', techStack: ['.NET Framework', 'API', 'IBM DB2', 'Windows Service', 'AzureDev ops', 'Git'], shortDescription: 'this Application is designed to keep 2 systems in sync, HCM & People+ are the two systems, this is achived by consuming APIs & Db2 connections.' },
      { heading: 'Joined Danske IT', time: 'Jul 2020', techStack: [], shortDescription: '' },
    ];
  }
}
