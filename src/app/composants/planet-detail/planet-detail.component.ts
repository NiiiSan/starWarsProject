import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Planet } from 'src/app/class/planets';
import { PlanetsService } from 'src/app/services/planets.service';

@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.css']
})
export class PlanetDetailComponent implements OnInit {
  planet: Planet;
  isLoading: boolean;
  constructor(private planetsService: PlanetsService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.planetsService.getPlanetById(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe((data: Planet) => {
    this.planet = data;
    this.isLoading = false;
    });
  }
}
