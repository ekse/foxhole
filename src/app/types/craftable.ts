import { RecipeName } from './recipe';

export const enum Craftable {
  // Vehicle
  MotorcycleStinger = '00MS "Stinger"',
  TruckSisyphus = 'R-5b Sisyphus Hauler',
  TanketteIxion = 'T20 "Ixion" Tankette',

  // Refined Materials
  cmats = 'Construction Materials',
  assmat1 = 'Assembly Materials I',
  Coke = 'Coke',

  // Raw Material
  Salvage = 'Salvage',
  Coal = 'Coal',
}

export const enum CraftableType {
  RawMaterial = 'Raw Material',
  RefinedMaterial = 'Refined Material',
  LargeMaterial = 'Large Material',
  Vehicle = 'Vehicle',
}

export interface Asset {
  id: Craftable;
  type: CraftableType;
  name: string;
  icon: string;
  recipes: RecipeName[];
}

export const GameAssets: Map<Craftable, Asset> = new Map([
  [
    Craftable.MotorcycleStinger,
    {
      id: Craftable.MotorcycleStinger,
      type: CraftableType.Vehicle,
      name: '00MS "Stinger"',
      icon: 'assets/icons/ProductionIcons/AssemblyStation/MotorcycleStinger.png',
      recipes: [RecipeName.SmallAssemblyStation_MotorcycleStinger],
    },
  ],
  [
    Craftable.TruckSisyphus,
    {
      id: Craftable.TruckSisyphus,
      type: CraftableType.Vehicle,
      name: 'R-5b Sisyphus Hauler',
      icon: 'assets/icons/ProductionIcons/AssemblyStation/TruckSisyphus.png',
      recipes: [RecipeName.SmallAssemblyStation_TruckSisyphus],
    },
  ],
  [
    Craftable.TanketteIxion,
    {
      id: Craftable.TanketteIxion,
      type: CraftableType.Vehicle,
      name: 'T20 "Ixion" Tankette',
      icon: 'assets/icons/ProductionIcons/AssemblyStation/TanketteIxion.png',
      recipes: [RecipeName.SmallAssemblyStation_Tankette],
    },
  ],

  // Refined Material
  [
    Craftable.cmats,
    {
      id: Craftable.cmats,
      type: CraftableType.RefinedMaterial,
      name: 'Construction Materials',
      icon: 'assets/icons/ProductionIcons/MaterialConstruction.png',
      recipes: [RecipeName.MaterialsFactory_Cmats, RecipeName.Smelter_Cmats],
    },
  ],
  [
    Craftable.Coke,
    {
      id: Craftable.Coke,
      type: CraftableType.RefinedMaterial,
      name: 'Coke',
      icon: 'assets/icons/ProductionIcons/Facility/MaterialCoke.png',
      recipes: [RecipeName.CoalRefinery_Coke],
    },
  ],

  // Large Material
  [
    Craftable.assmat1,
    {
      id: Craftable.cmats,
      type: CraftableType.LargeMaterial,
      name: 'Assembly Materials 1',
      icon: 'assets/icons/ProductionIcons/AssemblyMaterialsT1.png',
      recipes: [RecipeName.Forge_assmats1],
    },
  ],

  // Raw Material
  [
    Craftable.Salvage,
    {
      id: Craftable.Salvage,
      type: CraftableType.RawMaterial,
      name: 'Salvage',
      icon: 'assets/icons/ProductionIcons/Facility/MaterialRawSalvage.png',
      recipes: [],
    },
  ],
  [
    Craftable.Coal,
    {
      id: Craftable.Coal,
      type: CraftableType.RawMaterial,
      name: 'Coal',
      icon: 'assets/icons/ProductionIcons/Facility/MaterialRawCoal.png',
      recipes: [],
    },
  ],
]);
