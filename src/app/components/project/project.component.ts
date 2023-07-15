import { Component, Input } from '@angular/core';
import { Project } from '../../models';

@Component({
  selector: 'ric-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  @Input() proj: Project;

  constructor() {
    this.proj = { heading: 'heading', shortDescription: 'Description', time: 'July 2023', techStack: ['C#', 'angular', 'dotnet core'] };
  }
}
