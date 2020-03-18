import { Component, OnInit } from '@angular/core';
import { Planet } from 'src/app/class/planets';

@Component({
  selector: 'app-add-planet',
  templateUrl: './add-planet.component.html',
  styleUrls: ['./add-planet.component.css']
})
export class AddPlanetComponent implements OnInit {
  yesNoChoice = [{ text: 'oui', value: true}, { text: 'non', value: false}];
  planetForm: Planet;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
  }

}
