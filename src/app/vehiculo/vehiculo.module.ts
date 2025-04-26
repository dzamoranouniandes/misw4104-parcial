import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarVehiculosComponent } from './components/listar-vehiculos/listar-vehiculos.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ListarVehiculosComponent],
  exports: [ListarVehiculosComponent],
})
export class VehiculoModule {}
