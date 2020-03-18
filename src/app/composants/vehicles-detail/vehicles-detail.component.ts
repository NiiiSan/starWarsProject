import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { VehiclesService } from 'src/app/services/vehicles.service';
import { Vehicle } from 'src/app/class/vehicles';

@Component({
  selector: 'app-vehicles-detail',
  templateUrl: './vehicles-detail.component.html',
  styleUrls: ['./vehicles-detail.component.css']
})
export class VehiclesDetailComponent implements OnInit {
  vehicle: Vehicle;
  isLoading: boolean;
  constructor(private vehiclesService: VehiclesService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.vehiclesService.getVehicleById(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe((data: Vehicle) => {
    this.vehicle = data;
    this.isLoading = false;
    });
  }

}
