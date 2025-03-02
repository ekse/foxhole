import { Craftable } from '../types/asset';

export type CraftableCount = {
  craftable: Craftable;
  count: number;
};

export const enum RecipeName {
  SmallAssemblyStation_MotorcycleStinger = 'Small Assembly Station - Stinger',
  SmallAssemblyStation_TruckSisyphus = 'Small Assembly Station - Sisyphus',
  SmallAssemblyStation_Tankette = 'Small Assembly Station - Tankette',
  MaterialsFactory_Cmats = 'Materials Factory - Cmats',
}

export const enum ProductionType {
  Vehicle,
  RefinedMaterial,
}

export const enum Location {
  SmallAssemblyStation = 'Small Assembly Station',
  MaterialsFactory = 'Materials Factory',
}

export interface Recipe {
  id: RecipeName;
  location: Location;
  production_time: number;
  type: ProductionType;
  inputs: CraftableCount[];
  output: Craftable;
}

export interface FacilityRecipe {
  id: RecipeName;
  location: Location;
  production_time: number;
  type: ProductionType;
  inputs: CraftableCount[];
  outputs: CraftableCount[];
}

export const GameRecipes: Map<RecipeName, Recipe> = new Map([
  [
    RecipeName.SmallAssemblyStation_TruckSisyphus,
    {
      id: RecipeName.SmallAssemblyStation_TruckSisyphus,
      location: Location.SmallAssemblyStation,
      production_time: 300,
      type: ProductionType.Vehicle,
      inputs: [{ craftable: Craftable.cmats, count: 10 }],
      output: Craftable.TruckSisyphus,
    },
  ],
  [
    RecipeName.SmallAssemblyStation_MotorcycleStinger,
    {
      id: RecipeName.SmallAssemblyStation_MotorcycleStinger,
      location: Location.SmallAssemblyStation,
      production_time: 180,
      type: ProductionType.Vehicle,
      inputs: [{ craftable: Craftable.cmats, count: 5 }],
      output: Craftable.MotorcycleStinger,
    },
  ],
  [
    RecipeName.SmallAssemblyStation_Tankette,
    {
      id: RecipeName.SmallAssemblyStation_Tankette,
      location: Location.SmallAssemblyStation,
      production_time: 300,
      type: ProductionType.Vehicle,
      inputs: [
        { craftable: Craftable.cmats, count: 10 },
        { craftable: Craftable.assmat1, count: 15 },
      ],
      output: Craftable.TanketteIxion,
    },
  ],
  [
    RecipeName.MaterialsFactory_Cmats,
    {
      id: RecipeName.MaterialsFactory_Cmats,
      location: Location.MaterialsFactory,
      production_time: 25,
      type: ProductionType.RefinedMaterial,
      inputs: [{ craftable: Craftable.Salvage, count: 10 }],
      output: Craftable.cmats,
    },
  ],
]);
