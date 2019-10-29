import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Spaghetti', 'This is spaghetti', 'https://cdn.pixabay.com/photo/2018/07/18/19/12/spaghetti-3547078_960_720.jpg'),
    new Recipe('Cheese Burger', 'This is a Cheese Burger', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRilprH2cTPz6n2fInmNJd4GxEK3u2x_KW0G1_D8M8zDh__INkxOg&s')
  ];

  constructor() { }

  ngOnInit() {
  }

}
