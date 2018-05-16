import { Component, OnInit } from '@angular/core';
import {RecipeService} from '../services/recipe-service';
import { Recipe } from '../models/recipe';

@Component({
  selector: 'recipe-container',
  templateUrl: './recipe-container.component.html',
  styleUrls: ['./recipe-container.component.css']
})
export class RecipeContainerComponent implements OnInit {

  public recipe : Recipe;
  public recipes : Recipe[];

  constructor(private recipeService : RecipeService) {
    this.recipe = new Recipe(); 
    this.recipes = [];
  }

  onSubmit(recipe){
    if(recipe.id == null){
      this.saveRecipe(recipe);
    }else{
      this.updateRecipe(recipe);
    }    
  }

  saveRecipe(recipe){
    this.recipeService.saveRecipe(recipe).subscribe(
      result => {         
        this.getRecipes();    
        console.log(recipe);
    },
    error => { 
        alert('Ocurrio un error mientras se intentaba crear una receta');       
        console.log(<any>error);
    }
    );
  }

  updateRecipe(recipe){
    this.recipeService.updateRecipe(recipe).subscribe(
      result => {  
        this.getRecipes();           
        console.log(recipe);
    },
    error => { 
        alert('Ocurrio un error mientras se intentaba actualizar una receta');       
        console.log(<any>error);
    }
    );
  }

  editar(receta){      
    console.log(receta);
    this.recipe = receta;
  }

  getRecipes(){
    this.recipeService.getRecipes().subscribe(
     result => {
         this.recipes = result;
         console.log(result);
     },
     error => {
         console.log(<any>error);
     });
  }

  ngOnInit() {
    this.getRecipes();
  }

}
