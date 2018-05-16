import { Routes, RouterModule } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormRecetaComponent } from './form-receta/form-receta.component';
import { RecipeContainerComponent } from './recipe-container/recipe-container.component'
import {ListIngredientComponent} from './list-ingredient/list-ingredient.component';

const APP_ROUTES: Routes = [
    { path: '', redirectTo: 'recipes', pathMatch: 'full' },         
    { path: 'recipes', component: RecipeContainerComponent },
    { path: 'ingredients', component: ListIngredientComponent }   
];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }