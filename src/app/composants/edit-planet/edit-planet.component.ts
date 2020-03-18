import { ActivatedRoute, Router } from '@angular/router';
import { PlanetsService } from 'src/app/services/planets.service';
import { Component, OnInit } from '@angular/core';
import { Planet } from 'src/app/class/planets';

@Component({
  selector: 'app-edit-planet',
  templateUrl: './edit-planet.component.html',
  styleUrls: ['./edit-planet.component.css']
})
export class EditPlanetComponent implements OnInit {
  yesNoChoice = [{ text: 'oui', value: true}, { text: 'non', value: false}];
  planetForm: Planet;
  constructor(private planetsService: PlanetsService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    const id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'), 0);
    this.planetsService.getPlanetById(id).subscribe(then => {
      this.planetForm = then;
    });
  }

  onSubmit() {
    this.planetsService.editPlanet(this.planetForm);
    this.router.navigate(['/planets']);
  }
}

