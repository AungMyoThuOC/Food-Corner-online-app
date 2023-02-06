import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { sample_foods } from 'src/data';
import { FOODS_BY_ID_URL, FOODS_BY_SEARCH_URL, FOODS_URL } from '../shared/constants/url';
import { Food } from '../shared/model/Food';
// import { Tag } from '../shared/model/Tag'

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private httpClient:HttpClient) { }

  getAll():Observable<Food[]> {
    return this.httpClient.get<Food[]>(FOODS_URL)
  }

  // search Food
  getAllFoodBySearchTerm(searchTerm: string) {
    return this.httpClient.get<Food[]>(FOODS_BY_SEARCH_URL +searchTerm)
  }

  // Get All Tag
  // getAllTags():Observable<Tag[]> {
  //   return this.httpClient.get<Tag[]>(FOODS_TAGS_URL);
  // }

  // get Food by Tags
  // getAllFoodByTag(tag:string):Observable<Food[]> {
  //   return tag === "All"? this.getAll():this.httpClient.get<Food[]>(FOODS_BY_TAG_URL + tag)
  // }

  // Get Food by Id
  getFoodByID(foodId:string):Observable<Food>{
    return this.httpClient.get<Food>(FOODS_BY_ID_URL + foodId)
  }
}
