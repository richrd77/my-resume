import { Component, Inject } from '@angular/core';
import { AppConfig } from 'src/app/models';

@Component({
  selector: 'ric-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent {
  constructor(@Inject('AppConfig') config: AppConfig) {
    console.log(config)
  }
}
