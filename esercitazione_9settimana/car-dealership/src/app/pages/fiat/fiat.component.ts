import { Component } from '@angular/core';
import { iCar } from '../../models/car';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-fiat',
  templateUrl: './fiat.component.html',
  styleUrl: './fiat.component.scss'
})
export class FiatComponent {

  everyCarArray:iCar[] = []
  fiatCarArray:iCar[] = []

  constructor(
    private CarSvc:CarService
  ) {}

  ngOnInit(){
    this.CarSvc.getFromJson()
    .then(response => response.json())
    .then(response => this.everyCarArray = response)
    .then(() => console.log(this.everyCarArray))
    .then(() => console.log(this.everyCarArray[1].brand))
    .then(() => this.fiatCarArray =  this.CarSvc.getFilteredArray(this.everyCarArray, "fiat"))
    .then(() => console.log('filtrati', this.fiatCarArray))
  }

}
