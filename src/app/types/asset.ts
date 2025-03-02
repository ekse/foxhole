import { RecipeName } from '../types/recipe';

export const enum Craftable {
  MotorcycleStinger = '00MS "Stinger"',
  TruckSisyphus = 'R-5b Sisyphus Hauler',
  TanketteIxion = 'T20 "Ixion" Tankette',

  // Materials
  cmats = 'Construction Materials',
  assmat1 = 'Assembly Materials I',

  // Raw resources
  Salvage = 'Salvage',
}

export interface Asset {
  id: Craftable;
  name: string;
  icon: string;
  recipes: RecipeName[];
}

export const GameAssets: Map<Craftable, Asset> = new Map([
  [
    Craftable.MotorcycleStinger,
    {
      id: Craftable.MotorcycleStinger,
      name: '00MS "Stinger"',
      icon: 'assets/icons/ProductionIcons/AssemblyStation/MotorcycleStinger.png',
      recipes: [RecipeName.SmallAssemblyStation_MotorcycleStinger],
    },
  ],
  [
    Craftable.TruckSisyphus,
    {
      id: Craftable.TruckSisyphus,
      name: 'R-5b Sisyphus Hauler',
      icon: 'assets/icons/ProductionIcons/AssemblyStation/TruckSisyphus.png',
      recipes: [RecipeName.SmallAssemblyStation_TruckSisyphus],
    },
  ],
  [
    Craftable.TanketteIxion,
    {
      id: Craftable.TanketteIxion,
      name: 'T20 "Ixion" Tankette',
      icon: 'assets/icons/ProductionIcons/AssemblyStation/TanketteIxion.png',
      recipes: [RecipeName.SmallAssemblyStation_Tankette],
    },
  ],
  [
    Craftable.cmats,
    {
      id: Craftable.cmats,
      name: 'Construction Materials',
      icon: 'assets/icons/ProductionIcons/MaterialConstruction.png',
      recipes: [RecipeName.MaterialsFactory_Cmats],
    },
  ],
  [
    Craftable.assmat1,
    {
      id: Craftable.cmats,
      name: 'Assembly Materials 1',
      icon: 'assets/icons/ProductionIcons/AssemblyMaterialsT1.png',
      recipes: [],
    },
  ],
  [
    Craftable.Salvage,
    {
      id: Craftable.Salvage,
      name: 'Salvage',
      icon: 'assets/icons/ProductionIcons/Facility/MaterialRawSalvage.png',
      recipes: [],
    },
  ],
]);
