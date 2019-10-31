import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe(
            'Spaghetti', 
            'This is spaghetti', 
            'https://cdn.pixabay.com/photo/2018/07/18/19/12/spaghetti-3547078_960_720.jpg',
            [
                new Ingredient('Spaghetti', 1),
                new Ingredient('Canned Tomato', 1),
                new Ingredient('Basil Leaf', 4),
                new Ingredient('Tomato Paste', 1),
                new Ingredient('Brown Onion', 1),
                new Ingredient('Garlic Clove', 2)

            ]
            ),
        new Recipe(
            'Cheese Burger', 
            'This is a Cheese Burger', 
            'https://live.staticflickr.com/1976/44750956805_8e05ffff08_b.jpg',
            [
                new Ingredient('Burger Bun', 2),
                new Ingredient('Mince', 1),
                new Ingredient('Cheese Slice', 4),
                new Ingredient('Lettuce', 1),
                new Ingredient('Brown Onion', 1),
                new Ingredient('Garlic Clove', 2),
                new Ingredient('Mayonaise', 1),
                new Ingredient('Pickle', 1)

            ]
            )
    ];

    constructor(private shoppingListService: ShoppingListService) {

    }
    

    getRecipes() {
        // returns copy of array
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }

}