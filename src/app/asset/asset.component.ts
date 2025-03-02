import { Component, OnInit, Input, input, output } from '@angular/core';
import { Asset, Craftable } from '../types/asset';
import { RecipeName } from '../types/recipe';

@Component({
  selector: 'app-asset',
  imports: [],
  templateUrl: './asset.component.html',
  styleUrl: './asset.component.scss',
})
export class AssetComponent implements OnInit {
  id: Craftable | null = null;
  name: string = '';
  icon: string = '';
  recipes: RecipeName[] = [];
  selectionChanged = input<string>();
  isSelected = input<boolean>(false);
  selected = output<Craftable | null>();
  asset = input.required<Asset>();

  ngOnInit() {
    this.id = this.asset().id;
    this.name = this.asset().name;
    this.icon = this.asset().icon;
    this.recipes = this.asset().recipes;
  }
}
