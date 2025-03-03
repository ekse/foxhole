import { Component, input } from '@angular/core';
import { RecipeName, GameRecipes } from '../types/recipe';

import { Craftable, GameAssets } from '../types/craftable';
import { RecipeComponent } from '../recipe/recipe.component';

@Component({
  selector: 'recipe-list',
  imports: [RecipeComponent],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.scss',
})
export class RecipeListComponent {
  craftable = input<Craftable | null>();
  selectedCraftable = input<Craftable | null>();
  recipes = input<RecipeName[]>();
  game_recipes = GameRecipes;
  game_assets = GameAssets;

  onSelected(id: Craftable) {}
}
