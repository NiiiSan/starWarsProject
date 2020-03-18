import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/class/vehicles';
import { VehiclesService } from 'src/app/services/vehicles.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {
  vehicles: Vehicle[];
  isLoading: boolean;
  constructor(private vehiclesService: VehiclesService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.vehiclesService.getVehicles().subscribe((data: Vehicle[]) => {
      this.vehicles = data;
      this.isLoading = false;
    });
  }

  deleteVehicle() {
  }

}
