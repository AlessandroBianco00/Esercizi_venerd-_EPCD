import { Component } from '@angular/core';
import { iCar } from '../../models/car';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-ford',
  templateUrl: './ford.component.html',
  styleUrl: './ford.component.scss'
})
export class FordComponent {

  everyCarArray:iCar[] = []
  fordCarArray:iCar[] = []

  constructor(
    private CarSvc:CarService
  ) {}

  ngOnInit(){
    this.CarSvc.getFromJson()
    .then(response => response.json())
    .then(response => this.everyCarArray = response)
    .then(() => console.log(this.everyCarArray))
    .then(() => console.log(this.everyCarArray[3].brand))
    .then(() => this.fordCarArray =  this.CarSvc.getFilteredArray(this.everyCarArray, "ford"))
    .then(() => console.log('filtrati', this.fordCarArray))
  }
}
