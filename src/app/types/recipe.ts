export interface Recipe {
    name: string,
    inputs: [[input: string, count: number]],
    output: string,
    type: string,
    location: string,
    production_time: number
}

export interface FacilityRecipe {
    name: string,
    inputs: [[input: string, count: number]],
    outputs: [[output: string, count: number]],
    type: string,
    location: string,
    production_time: number
}