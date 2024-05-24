
import { CarService } from './../../services/car.service';
import { Component } from '@angular/core';
import { iCar } from '../../models/car';

@Component({
  selector: 'app-audi',
  templateUrl: './audi.component.html',
  styleUrl: './audi.component.scss'
})
export class AudiComponent {

  everyCarArray:iCar[] = []
  audiCarArray:iCar[] = []

  constructor(
    private CarSvc:CarService
  ) {}

  ngOnInit(){
    this.CarSvc.getFromJson()
    .then(response => response.json())
    .then(response => this.everyCarArray = response)
    .then(() => console.log(this.everyCarArray))
    .then(() => console.log(this.everyCarArray[5].brand))
    .then(() => this.audiCarArray =  this.CarSvc.getFilteredArray(this.everyCarArray, "audi"))
    .then(() => console.log('filtrati', this.audiCarArray))
  }
}
