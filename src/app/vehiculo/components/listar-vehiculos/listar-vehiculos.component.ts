import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Vehiculo } from '../../model/vehiculo';
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'app-listar-vehiculos',
  templateUrl: './listar-vehiculos.component.html',
  styleUrl: './listar-vehiculos.component.css',
  standalone: false,
})
export class ListarVehiculosComponent implements OnInit {
  vehicles: Array<Vehiculo> = [];
  vehicleCountsByBrand: Map<string, number> = new Map();

  constructor(private vehicleService: VehicleService) {}

  ngOnInit() {
    this.loadVehiclesList();
  }

  /**
   * Carga los vehículos consultando el servicio `VehicleService`.
   */
  loadVehiclesList() {
    this.vehicleService.getAllVehicles().subscribe((vehicles) => {
      this.vehicles = vehicles;

      vehicles.forEach((vehicle) => {
        if (this.vehicleCountsByBrand.has(vehicle.marca)) {
          this.vehicleCountsByBrand.set(
            vehicle.marca,
            this.vehicleCountsByBrand.get(vehicle.marca)! + 1
          );
        } else {
          this.vehicleCountsByBrand.set(vehicle.marca, 1);
        }
      });
    });
  }
}
