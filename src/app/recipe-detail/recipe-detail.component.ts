import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Recipe } from '../shared/recipe';
import { RecipeService } from '../shared/recipe.service';
import { ShoppingListService } from '../shared/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private recipeService: RecipeService,
    private shoppingListService: ShoppingListService
  ) { }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.recipeService.getRecipe(id)
        .then(recipe => this.recipe = recipe);
    });
  }

  goBack(): void {
    this.location.back();
  }

  addAll(ingredients: any[]): void {
    ingredients = this.recipe.ingredients;

    ingredients.forEach(ingredient => {
      this.shoppingListService.addIngredient(ingredient.id, ingredient.name, ingredient.amount, ingredient.size);
    });
    alert('Ingredients have been added to your list!');
  }

}
