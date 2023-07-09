export interface IPokemon{
    id: number;
    name: string;
    sprites: {
        front_default: string;
        other: {
            "official-artwork": {
                front_default: string;
            }
        }
    };
    types: {
        type: {
            name: "rock" |
            "ghost" |
            "steel" |
            "water" |
            "grass" |
            "psychic" |
            "ice" |
            "dark" |
            "fairy" |
            "normal" |
            "fighting" |
            "flying" |
            "poison" |
            "ground" |
            "bug" |
            "fire" |
            "electric" |
            "dragon";
        }
    }[];
}