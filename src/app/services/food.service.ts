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

  // Get All Tag
  // getAllTags():Tag[] {
  //   return sample_tags
  // }

  // get Food by Tags
  // getAllFoodByTag(tag:string):Food[] {
  //   return tag === "All"? this.getAll():this.getAll().filter(food => food.tags?.includes(tag));
  // }

  // Get Food by Id
  getFoodByID(foodId:string){
    return this.getAll().find(food => food.id == foodId)?? new Food();
  }
}
