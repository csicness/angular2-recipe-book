import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Ingredient } from './ingredient';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class ShoppingListService {
    private ingredientsUrl = 'app/ingredients.json';

    private headers = new Headers({'content/type': 'application/json'});

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }

    constructor(private http: Http) { }
    
    getIngredients(): Observable<Ingredient[]> {
        return this.http.get(this.ingredientsUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    addIngredient(id: string, name: string, amount: number, size: string): Promise<Ingredient> {
        return this.http
            .post(this.ingredientsUrl, JSON.stringify({id: id, name: name, amount: amount, size: size}), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    deleteIngredient(id: string): Observable<Ingredient> {
        const url = `${this.ingredientsUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }
}