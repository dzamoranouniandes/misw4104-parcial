# MISW4104 Parcial

Repositorio de la evaluación práctica sobre Angular.

Curso: MISW4104

Periodo: 2025-12

Autor: Danny Zamorano Vallejo

## Estructura

Módulos implementados:

| Módulo           | Componentes                | Services         | Clases / Modelo |
| ---------------- | -------------------------- | ---------------- | --------------- |
| `AppModule`      | `AppComponent`             | -                | -               |
| `VehiculoModule` | `ListarVehiculosComponent` | `VehicleService` | `Vehiculo`      |

## Desarrollo

1. Se crea proyecto base Angular con Bootstrap.
2. Se crea componente `VehiculoModule` para alojar componente de listado de vehículos.
3. Se crea clase de modelo `Vehiculo` y service `VehicleService` para consultar listado de vehículos del parcial.
4. Se implementa componente `ListarVehiculosComponent` que muestra los vehículos cargados en una tabla más una sección de conteos de vehículos por marca.
5. Se implementan pruebas unitarias de componente `ListarVehiculosComponent` verificando carga de datos y creación de filas en las secciones de tabla y conteos.
