import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Recipe } from './recipe';

@Injectable()

export class RecipeService {
    private recipesUrl = 'app/recipes';

    private headers = new Headers({'content/type': 'application/json'});

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    constructor(private http: Http) { }

    getRecipes(): Promise<Recipe[]> {
        return this.http.get(this.recipesUrl)
            .toPromise()
            .then(res => res.json().data as Recipe[])
            .catch(this.handleError);
    }

    addRecipe(name: string, imageUrl: string, description: string, directions: string, ingredients: any[]): Promise<Recipe> {
        return this.http
            .post(this.recipesUrl, JSON.stringify({
                name: name,
                imageUrl: imageUrl,
                description: description,
                directions: directions,
                ingredients: ingredients
            }), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    getRecipe(id: number): Promise<Recipe> {
        return this.getRecipes()
            .then(recipes => recipes.find(recipe => recipe.id === id));
    }

    deleteRecipe(id: number): Promise<void> {
        const url = `${this.recipesUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    updateRecipe(recipe: Recipe): Promise<Recipe> {
        const url = `${this.recipesUrl}/${recipe.id}`;
        return this.http.put(url, JSON.stringify(recipe), {headers: this.headers})
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }
}