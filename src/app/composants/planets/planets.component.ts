import {Component, OnInit} from '@angular/core';
import {Planet} from 'src/app/class/planets';
import { PlanetsService } from 'src/app/services/planets.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {
  planets: Planet[];
  isLoading: boolean;
  constructor(private planetsService: PlanetsService) {}

  ngOnInit() {
    this.isLoading = true;
    this.planetsService.getPlanets().subscribe((data: Planet[]) => {
      this.planets = data;
      this.isLoading = false;
    });
  }

  deletePlanet(planet: Planet) {
    this.isLoading = true;
    this.planetsService.deletePlanet(planet).subscribe(then => {
      this.planetsService.getPlanets().subscribe(thosePlanets => {
        this.planets = thosePlanets;
        this.isLoading = false;
      });
    });
  }
}
