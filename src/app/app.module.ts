import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormRecetaComponent } from './form-receta/form-receta.component';
import { AppRoutingModule } from './app.routes';
import { ListRecipeComponent } from './list-recipe/list-recipe.component';
import { ListIngredientComponent } from './list-ingredient/list-ingredient.component';
import {IngredientService} from './services/ingredient-service';
import {RecipeService} from './services/recipe-service';
import { RecipeContainerComponent } from './recipe-container/recipe-container.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FormRecetaComponent,
    ListRecipeComponent,
    ListIngredientComponent,
    RecipeContainerComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [IngredientService, RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
