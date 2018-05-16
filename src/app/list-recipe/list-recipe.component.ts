import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../models/recipe';
import {RecipeService} from '../services/recipe-service';

@Component({
  selector: 'list-recipe',
  templateUrl: './list-recipe.component.html',
  styleUrls: ['./list-recipe.component.css']
})
export class ListRecipeComponent implements OnInit {

    @Input()  public recipes : Recipe[];
    @Output() public edit: EventEmitter<any> = new EventEmitter();

  constructor() {
 
   }   

   editar(recipe){
    this.edit.emit(recipe);
  }

  ngOnInit() {
      
  }

}
