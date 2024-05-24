import { CarService } from './../../services/car.service';
import { iCar } from './../../models/car';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {

  carModel!:iCar[]
  everyCarArray:iCar[] = []

  constructor(
    private route:ActivatedRoute,
    private CarSvc:CarService
  ) {}

  ngOnInit() {

    this.CarSvc.getFromJson()
    .then(response => response.json())
    .then(response => this.everyCarArray = response)
    .then(() => console.log(this.everyCarArray))
    //Ricerca con id
    .then(() => {
      this.route.params.subscribe((params:any) => {

        console.log(params);

        let carFound = this.CarSvc.getCarByModel(params.id, this.everyCarArray)

        console.log(carFound);

        if(carFound){
          this.carModel = carFound
        }
      })
    })
  }
}
