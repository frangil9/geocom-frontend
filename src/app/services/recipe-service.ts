import { Injectable } from '@angular/core';
import {Http, Response, Headers, URLSearchParams, RequestOptions } from "@angular/http";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";
import {Recipe} from '../models/recipe'

@Injectable()
export class RecipeService {

public url : string = 'http://localhost:8080/recipes';
     
constructor(private http : Http,
              private httpClient: HttpClient
            ) { }

getRecipes(): Observable<any>{
    return this.httpClient.get(this.url);
}

saveRecipe(recipe: Recipe): Observable<any>{
    let body = JSON.stringify(recipe);
    let headers = new HttpHeaders().set('Content-Type','application/json');
     
    return this.httpClient.post(this.url, body, {headers: headers});
  }

  updateRecipe(recipe: Recipe): Observable<any>{
    let body = JSON.stringify(recipe);
    let headers = new HttpHeaders().set('Content-Type','application/json');
     
    return this.httpClient.put(this.url, body, {headers: headers});
  }
}