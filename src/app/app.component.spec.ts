import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  @Component({
    selector: 'app-listar-vehiculos',
    template: '<div></div>',
    standalone: false,
  })
  class MockListarVehiculosComponent {}

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([])],
      declarations: [AppComponent, MockListarVehiculosComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'misw4104-parcial'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('misw4104-parcial');
  });
});
