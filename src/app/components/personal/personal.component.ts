import { Component, Inject } from '@angular/core';
import { AppConfig } from 'src/app/models';
import { ValueService } from 'src/app/services/value.service';

@Component({
  selector: 'ric-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent {
  constructor(@Inject('AppConfig') config: AppConfig,
    public ser: ValueService) {
    console.log(config)
  }
}
