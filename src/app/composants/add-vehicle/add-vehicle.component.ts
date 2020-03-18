import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/class/vehicles';
import { VehiclesService } from 'src/app/services/vehicles.service';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent implements OnInit {
  formAddVehicul: Vehicle;
  vehicleToAdd = new Vehicle();
  yesNoChoice = [{ text: 'oui', value: true}, { text: 'non', value: false}];
  constructor(private vehiclesservices: VehiclesService) { }

  ngOnInit(): void {
  }

  addVehicle() {
  }

}
