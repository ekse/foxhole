import { Component, OnInit, input, output } from '@angular/core';
import { Asset, Craftable } from '../types/craftable';
import { RecipeName } from '../types/recipe';

@Component({
  selector: 'app-craftable',
  imports: [],
  templateUrl: './craftable.component.html',
  styleUrl: './craftable.component.scss',
})
export class CraftableComponent implements OnInit {
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
