import { Injectable } from '@angular/core';
import {Http, Response, Headers, URLSearchParams, RequestOptions } from "@angular/http";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";
import {Ingredient} from '../models/ingredient';

@Injectable()
export class IngredientService {
     
constructor(private http : Http,
              private httpClient: HttpClient
            ) { }

getTotalIngredientsByName(): Observable<any>{
    return this.httpClient.get('http://localhost:8080/ingredients/total');
} 

}