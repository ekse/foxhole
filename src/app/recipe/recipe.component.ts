import { Component, input, signal, forwardRef } from '@angular/core';
import { Recipe, RecipeName } from '../types/recipe';
import { Craftable, GameAssets } from '../types/asset';
import { AssetComponent } from '../asset/asset.component';
import { RecipeListComponent } from '../recipe-list/recipe-list.component';

@Component({
  selector: 'app-recipe',
  imports: [AssetComponent, forwardRef(() => RecipeListComponent)],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.scss',
})
export class RecipeComponent {
  recipe = input.required<Recipe>();
  selectedCraftable = signal<Craftable | null>(null);
  selectedRecipes = signal<RecipeName[]>([]);
  game_assets = GameAssets;
  indent_level = input<number>(0);

  onSelected(id: Craftable) {
    if (id != null) {
      this.selectedCraftable.set(id);
      this.selectedRecipes.set(GameAssets.get(id)!.recipes);
    }
  }
}
