import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shoppingList/shopping-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';

const appRoutes: Routes = [
    {
        path: 'recipes',
        component: RecipesComponent
    },
    {
        path: 'shopping',
        component: ShoppingListComponent
    },
    {
        path: 'detail/:id',
        component: RecipeDetailComponent
    },
    {
        path: 'edit',
        component: RecipeEditComponent
    },
    {
        path: 'edit/:id',
        component: RecipeEditComponent
    },
    {
        path: '',
        redirectTo: '/recipes',
        pathMatch: 'full'
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);