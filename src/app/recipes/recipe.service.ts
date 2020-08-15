import { Recipe } from './recipe.model';
import { EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
    @Output() recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Tasty Schnitzel',
            'A super-tasty Schnitzel - just awesome!',
            'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
            [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)],
        ),
        new Recipe(
            'Big Fat Burger',
            'Nothing else needed to be said!',
            'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
            [new Ingredient('Buns', 2), new Ingredient('Ground Angus Beef', 1)],
        ),
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}
