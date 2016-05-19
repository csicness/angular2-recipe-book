import { Component, OnInit } from 'angular2/core';
import { RouteParams, Router } from 'angular2/router';
import { Recipe } from '../shared/recipe';
import { RecipeService } from './recipe.service';
import { ShoppingListService } from '../shared/shopping-list.service';

@Component({
	templateUrl: 'templates/recipes/recipe-detail.tpl.html',
	providers: [ShoppingListService]
})
export class RecipeDetailComponent implements OnInit {
	recipe: Recipe;
	private _recipeIndex; string;

	constructor(
		private _routeParams: RouteParams, 
		private _recipeService: RecipeService,
		private _shoppingListService: ShoppingListService,
		private _router: Router) {}

	ngOnInit(): any {
		let itemIndex = this._routeParams.get('recipeIndex');
		this._recipeIndex = itemIndex;
		this.recipe = this._recipeService.getRecipe(
			itemIndex !== null ? +itemIndex : null) || null;
	}

	onEdit() {
		this._router.navigate(['RecipeEdit', { editMode: 'edit', itemIndex: this._recipeIndex }]);
	}

	onDelete() {
		this._recipeService.deleteRecipe(+this._recipeIndex);
		this._router.navigate(['RecipeDetail']);
	}

	onAddToShoppingList() {
		this._shoppingListService.insertItems(this.recipe.ingredients);
		alert("All ingredients added to shopping list!");
	}
}