import { Recipe } from './recipe.model';
import { EventEmitter, Output } from '@angular/core';

export class RecipeService {
    @Output() recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'A Test Recipe',
            'This is simply to test functionality',
            'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
        ),
        new Recipe(
            'Second One',
            'Here is a description',
            'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
        ),
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}
