import { Component, input, signal, forwardRef } from '@angular/core';
import { Recipe, RecipeName } from '../types/recipe';
import { Craftable, GameAssets } from '../types/craftable';
import { CraftableComponent } from '../craftable/craftable.component';
import { RecipeListComponent } from '../recipe-list/recipe-list.component';
import { RecipeSummaryComponent } from '../recipe-summary/recipe-summary.component';

@Component({
  selector: 'app-recipe',
  imports: [
    CraftableComponent,
    forwardRef(() => RecipeListComponent),
    RecipeSummaryComponent,
  ],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.scss',
})
export class RecipeComponent {
  recipe = input.required<Recipe>();
  selectedCraftable = signal<Craftable | null>(null);
  craftable = input<Craftable | null>();
  selectedRecipes = signal<RecipeName[]>([]);
  game_assets = GameAssets;
  craftCount = signal<number>(0);

  onCraftCountChanged(event: Event) {
    const el = event.target as HTMLInputElement;
    let value = parseInt(el.value ?? '0');
    if (isNaN(value)) {
      value = 0;
    }
    this.craftCount.set(parseInt(el.value ?? '0'));
  }

  onSelected(recipe: RecipeName, craftable: Craftable) {
    if (craftable == null) {
      return;
    }

    if (this.recipe().id == recipe) {
      this.selectedCraftable.set(craftable);
      this.selectedRecipes.set(GameAssets.get(craftable)!.recipes);
    }
  }
}
