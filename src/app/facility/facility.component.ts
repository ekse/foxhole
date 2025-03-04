import { Component, OnInit, signal } from '@angular/core';
import { Asset } from '../types/craftable';
import { CraftableComponent } from '../craftable/craftable.component';
import { RecipeListComponent } from '../recipe-list/recipe-list.component';
import { Recipe, RecipeName, FacilityRecipe } from '../types/recipe';
import { GameAssets, Craftable } from '../types/craftable';

@Component({
  selector: 'app-facility',
  imports: [CraftableComponent, RecipeListComponent],
  templateUrl: './facility.component.html',
  styleUrl: './facility.component.scss',
})
export class FacilityComponent {
  selectionChanged = signal('');
  selectedCraftable = signal<Craftable | null>(null);
  selectedRecipes = signal<RecipeName[]>([]);
  selectedAssetId: string | null = null;
  game_assets = GameAssets;

  onSelected(id: Craftable) {
    if (id != null) {
      this.selectedCraftable.set(id);
      this.selectedRecipes.set(GameAssets.get(id)!.recipes);
    }
  }
}
