import { Component, input, forwardRef } from '@angular/core';
import { Recipe } from '../types/recipe';
import { CraftableComponent } from '../craftable/craftable.component';
import { GameAssets } from '../types/craftable';

@Component({
  selector: 'recipe-summary',
  imports: [forwardRef(() => CraftableComponent)],
  templateUrl: './recipe-summary.component.html',
  styleUrl: './recipe-summary.component.scss',
})
export class RecipeSummaryComponent {
  game_assets = GameAssets;
  recipe = input.required<Recipe>();
}
