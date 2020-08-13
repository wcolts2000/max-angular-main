import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter, Output } from '@angular/core';

export class ShoppingListService {
    @Output() ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [new Ingredient('Apples', 5), new Ingredient('Tomatoes', 10)];

    getIngredients() {
        return this.ingredients.slice();
    }

    addItem(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
    //
    // removeItem(ingredient: Ingredient) {
    //     this.shoppingList.splice();
    // }
    //
    // removeAll() {
    //     this.shoppingList = [];
    //     return [];
    // }
}
