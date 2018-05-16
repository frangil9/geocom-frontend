import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../models/recipe';
import {RecipeService} from '../services/recipe-service';
import { Router } from '@angular/router';

@Component({
  selector: 'form-receta',
  templateUrl: './form-receta.component.html',
  styleUrls: ['./form-receta.component.css']
})
export class FormRecetaComponent implements OnInit {

  @Input() public recipe : Recipe;
  @Output() public save: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.recipe = new Recipe();
   }

  onSubmit(){    
    console.log(this.recipe);
    this.save.emit(this.recipe);    
    this.recipe = new Recipe();
  }

  reset(){
    this.recipe = new Recipe();
  }

  ngOnInit() {
  }

}
