import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';

import { of } from 'rxjs';
import { faker } from '@faker-js/faker';

import { ListarVehiculosComponent } from './listar-vehiculos.component';
import { VehicleService } from '../../services/vehicle.service';
import { Vehiculo } from '../../model/vehiculo';

describe('ListarVehiculosComponent', () => {
  let component: ListarVehiculosComponent;
  let fixture: ComponentFixture<ListarVehiculosComponent>;

  let vehicleServiceSpy: jasmine.SpyObj<VehicleService>;
  let mockVehicles: Vehiculo[];

  /**
   * Crea una lista de objetos mock de vehículos.
   *
   * @param vehiclesCount - Número de vehículos mock a generar.
   * @returns Lista de vehículos mock.
   */
  function createMockVehicles(vehiclesCount: number = 3): Vehiculo[] {
    let mockVechicles = Array(vehiclesCount)
      .fill(null)
      .map(
        () =>
          ({
            id: faker.number.int().toString(),
            marca: faker.vehicle.manufacturer(),
            linea: faker.vehicle.type(),
            referencia: faker.vehicle.vehicle(),
            modelo: faker.number.int({ min: 1970, max: 2025 }),
            kilometraje: faker.number.int({ min: 0, max: 100000 }),
            color: faker.color.human(),
            imagen: faker.internet.url(),
          } as Vehiculo)
      );

    return mockVechicles;
  }

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('VehicleService', ['getAllVehicles']);

    // Se crea una lista de 3 vehículos mock.
    mockVehicles = createMockVehicles(3);
    // Se inyecta como resultado en el spy de VehicleService.
    spy.getAllVehicles.and.returnValue(of(mockVehicles));

    await TestBed.configureTestingModule({
      // imports: [HttpClientTestingModule],
      declarations: [ListarVehiculosComponent],
      providers: [{ provide: VehicleService, useValue: spy }],
    }).compileComponents();

    vehicleServiceSpy = TestBed.inject(
      VehicleService
    ) as jasmine.SpyObj<VehicleService>;
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(ListarVehiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Se cheque que VehicleService se llame una vez al iniciar el componente.
  it('should call getAllVehicles on initialization', () => {
    expect(vehicleServiceSpy.getAllVehicles).toHaveBeenCalledTimes(1);
  });

  // Se cheque que se carguen los 3 vehículos mock en la lista de vehículos.
  it('should load the vehicles', () => {
    expect(component.vehicles.length).toBe(3);
  });

  // Se chequea que se cargue el mapa de conteos de vehículos por marca.
  it('should load the counts by vehicle brand', () => {
    const distinctBrands: number = new Set(
      component.vehicles.map((vehicle) => vehicle.marca)
    ).size;
    expect(component.vehicleCountsByBrand.size).toBe(distinctBrands);
  });

  // Se chequea que la tabla de vehículos tenga el número de files correcto.
  it('should create correct number of rows in the vehicle table', () => {
    const tableBody = fixture.debugElement.query(
      By.css('#vehicles-table tbody')
    );
    const rows = tableBody.queryAll(By.css('tr'));

    expect(rows.length).toBe(component.vehicles.length);
  });

  // Se chequea que la sección de conteo de vehículos por marca tenga el número de filas correcto.
  it('should create the correct number of rows in the counts by brand section', () => {
    const countsSection = fixture.debugElement.query(
      By.css('#vehicles-counts')
    );
    const rows = countsSection.queryAll(By.css('div'));

    const distinctBrands: number = new Set(
      component.vehicles.map((vehicle) => vehicle.marca)
    ).size;

    expect(rows.length).toBe(distinctBrands);
  });
});
