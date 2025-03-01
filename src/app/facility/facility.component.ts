import { Component, OnInit, signal } from '@angular/core';
import * as assetData from '../../assets/data/assets.json';
import { Recipe, FacilityRecipe } from '../types/recipe';
import { Asset } from '../types/asset';
import { AssetComponent } from '../asset/asset.component';
import { RecipeListComponent } from '../recipe-list/recipe-list.component';

@Component({
  selector: 'app-facility',
  imports: [AssetComponent, RecipeListComponent],
  templateUrl: './facility.component.html',
  styleUrl: './facility.component.scss',
})
export class FacilityComponent implements OnInit {
  assets: Map<string, Asset> = new Map();
  selectionChanged = signal('');
  selectedAsset = signal('');
  selectedRecipes = signal<string[]>([]);
  selectedAssetId: string | null = null;

  private parseAssets(): void {
    let data: any = assetData;
    let keys: string[] = Object.keys(assetData);

    for (let key of keys) {
      if (key == 'default') {
        continue;
      }

      let entry = data[key];

      let asset: Asset = {
        id: key,
        name: entry.name,
        icon: 'assets/icons/' + entry.icon,
        recipes: entry.recipes,
      };

      this.assets.set(key, asset);
    }
  }

  ngOnInit(): void {
    this.parseAssets();
  }

  onSelected(id: string) {
    this.selectedAsset.set(id);

    if (!this.selectedAssetId) {
      this.selectedRecipes.set(this.assets.get(id)!.recipes);
    }
  }
}
