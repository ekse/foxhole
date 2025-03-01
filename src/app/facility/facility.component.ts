import { Component, OnInit } from '@angular/core';
import * as recipeData from '../../assets/data/recipes.json';
import * as facilityRecipeData from '../../assets/data/facility_recipes.json';
import * as assetData from '../../assets/data/assets.json';
import { Recipe, FacilityRecipe } from '../types/recipe';
import { Asset } from '../types/asset';


@Component({
  selector: 'app-facility',
  imports: [],
  templateUrl: './facility.component.html',
  styleUrl: './facility.component.scss'
})

export class FacilityComponent implements OnInit {
  recipes: Recipe[] = [];
  facilityRecipes: FacilityRecipe[] = [];
  assets: Asset[] = [];

  parseRecipes(): void {
    let data: any = recipeData;
    let keys: any = Object.keys(recipeData);
    console.log(data);
    console.log(keys);
    
    for (let key of keys) {
      if (key == "default") {
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
      }

      console.log("Recipe:")
      console.log(recipe)

      this.recipes.push(recipe);
    };
  }

  parseAssets(): void
  {
    let data: any = assetData;
    let keys: string[] = Object.keys(assetData);

    for (let key of keys) {
      if (key == "default") {
        continue;
      }

      let entry = data[key];

      let asset: Asset = {
        id: key,
        name: entry.name,
        icon: "assets/icons/" + entry.icon,
        recipes: entry.recipes,
      }

      this.assets.push(asset);

    }
  }

  ngOnInit(): void {
    this.parseRecipes();
    this.parseAssets();
    console.log(this.recipes);
  }
}
