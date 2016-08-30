import { Component } from '@angular/core';
import { AlienService } from './shared/services/alien.service';
import {ROUTER_DIRECTIVES} from '@angular/router';
import { OccupationService } from './shared/services/occupation.service';


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [AlienService],
})
export class AppComponent {
  title = 'Mars Colony 1';

  constructor(alienService: AlienService){
  	console.log(alienService);
  }
}
