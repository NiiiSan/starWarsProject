import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/class/vehicles';

@Component({
  selector: 'app-edit-vehicle',
  templateUrl: './edit-vehicle.component.html',
  styleUrls: ['./edit-vehicle.component.css']
})
export class EditVehicleComponent implements OnInit {
  vehicleForm: Vehicle;
  yesNoChoice: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
  }
}
