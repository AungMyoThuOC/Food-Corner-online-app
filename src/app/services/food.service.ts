import { Injectable } from '@angular/core';
import { sample_foods } from 'src/data';
import { Food } from '../shared/model/Food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll(): Food[] {
    return sample_foods
  }

  // search Food
  getAllFoodBySearchTerm(searchTerm: string) {
    return this.getAll().filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  // Get Food by Id
  getFoodByID(foodID:string){
    return this.getAll().find(food => food.id)?? new Food();
  }
}
