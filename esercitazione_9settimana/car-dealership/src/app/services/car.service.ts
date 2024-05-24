import { Injectable } from '@angular/core';
import { iCar } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  urlJson:string = '../../../assets/db.json'

  constructor() { }

  // SHUFFLE FISHER-YATES
  shuffleArray(array:any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  getFromJson():Promise<Response>{
    return fetch(this.urlJson)
  }

  getFilteredArray(array:iCar[], brandAuto:string):iCar[] {
    return array.filter(car => (car.brand.toLocaleLowerCase() === brandAuto))
  }

  getCarByModel(id:string, array:iCar[]){
    return array.filter(p => p.model === id)
  }
}
