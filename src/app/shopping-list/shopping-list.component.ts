import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Spaghetti Pasta', 1),
    new Ingredient('Spaghetti Sauce', 1)
  ];

  constructor() { }

  ngOnInit() {
  }

}
