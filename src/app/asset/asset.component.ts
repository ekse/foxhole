import { Component, OnInit, Input, input, output } from '@angular/core';
import { Asset } from '../types/asset';

@Component({
  selector: 'app-asset',
  imports: [],
  templateUrl: './asset.component.html',
  styleUrl: './asset.component.scss',
})
export class AssetComponent implements OnInit {
  id: string = '';
  name: string = '';
  icon: string = '';
  recipes: string[] = [];
  //id = input.required<string>();
  //name = input.required<string>();
  //icon = input.required<string>();
  //recipes = input.required<[string]>();
  selectionChanged = input<string>();
  isSelected = input<boolean>(false);
  selected = output<string>();
  asset = input.required<Asset>();

  ngOnInit() {
    this.id = this.asset().id;
    this.name = this.asset().name;
    this.icon = this.asset().icon;
    this.recipes = this.asset().recipes;
  }
}
