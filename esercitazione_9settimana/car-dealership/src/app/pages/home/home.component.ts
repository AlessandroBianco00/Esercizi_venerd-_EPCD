
import { CarService } from './../../services/car.service';
import { Component } from '@angular/core';
import { iCar } from '../../models/car';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  everyCarArray:iCar[] = []
  randomCarArray:iCar[] = []

  constructor(
    private CarSvc:CarService
  ) {}

  ngOnInit(){
    this.CarSvc.getFromJson()
    .then(response => response.json())
    .then(response => {
      this.CarSvc.shuffleArray(response)
      this.everyCarArray = response
    })
    .then(() => console.log(this.everyCarArray))
    .then(() => this.drawShuffledCar(this.everyCarArray, 2))
    .then(() => console.log('estratte', this.randomCarArray))
  }

  drawShuffledCar(array:iCar[], draws:number):void{
    for (let i = 0; i < draws; i++) {
      this.randomCarArray.push(array[i])
    }
  }
}
