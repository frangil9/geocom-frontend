import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../models/ingredient';
import {IngredientService} from '../services/ingredient-service';

@Component({
  selector: 'app-list-ingredient',
  templateUrl: './list-ingredient.component.html',
  styleUrls: ['./list-ingredient.component.css']
})
export class ListIngredientComponent implements OnInit {

  public ingredients : Ingredient[];

  constructor(private ingredientService : IngredientService) { 
    this.ingredients = [];
  }

  getIngredients(){
    this.ingredientService.getTotalIngredientsByName().subscribe(
     result => {
         this.ingredients = result;
         console.log(result);
     },
     error => {
         console.log(<any>error);
     });
  }

  ngOnInit() {
   this.getIngredients();
  }

}
