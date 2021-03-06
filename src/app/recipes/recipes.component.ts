import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeService } from '../shared/recipe.service';
import { Recipe } from '../shared/recipe';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[];

  constructor(
    private recipeService: RecipeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.recipeService.getRecipes()
      .then(recipes => this.recipes = recipes);
  }

  recipeDetail(recipe: Recipe): void {
    let link = ['/detail', recipe.id];
    this.router.navigate(link);
  }

  recipeEdit(recipe: Recipe): void {
    let link = ['/edit', recipe.id];
    this.router.navigate(link);
  }

  delete(recipe: Recipe): void {
    this.recipeService
      .deleteRecipe(recipe.id)
      .then(() => {
        this.recipes = this.recipes.filter(r => r !== recipe);
      });   
  }
  
}
