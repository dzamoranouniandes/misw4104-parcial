import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Vehiculo } from '../model/vehiculo';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  private vehiclesApiUrl = environment.apiBaseUrl + '/';

  constructor(private http: HttpClient) {}

  getAllVehicles() {
    return this.http.get<Vehiculo[]>(this.vehiclesApiUrl);
  }
}
