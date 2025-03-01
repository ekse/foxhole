import { Component, input, OnInit } from '@angular/core';
import * as recipeData from '../../assets/data/recipes.json';
import * as facilityRecipeData from '../../assets/data/facility_recipes.json';
import { Recipe, FacilityRecipe } from '../types/recipe';

@Component({
  selector: 'recipe-list',
  imports: [],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.scss',
})
export class RecipeListComponent implements OnInit {
  recipes: Map<string, Recipe> = new Map();

  // recipes: Recipe[] = [];
  //facilityRecipes: FacilityRecipe[] = [];
  selectedAsset = input<string>();
  availableRecipes = input<string[]>();

  private parseRecipes(): void {
    let data: any = recipeData;
    let keys: any = Object.keys(recipeData);

    for (let key of keys) {
      if (key == 'default') {
        continue;
      }

      let entry = data[key];

      console.log(entry);

      let recipe: Recipe = {
        name: key,
        inputs: entry.inputs,
        output: entry.output,
        type: entry.type,
        location: entry.location,
        production_time: entry.production_time,
      };

      this.recipes.set(key, recipe);
    }
  }

  ngOnInit(): void {
    this.parseRecipes();
  }
}
