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
    this.proj = { heading: '', shortDescription: '', time: '', techStack: [] };
  }
}
