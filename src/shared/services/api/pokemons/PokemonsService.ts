import { Environment } from "../../../environment"
import { IPokemon } from "../../models";
import { Api } from "../axios-config"

const getAll = async (offset = 1): Promise<IPokemon[] | Error> => {
    try {
        const pokemons: IPokemon[] = [];
        const totalCountPokemonsMoreOne = Environment.COUNT_POKEMONS + 1;
        for (let i = offset; i < offset + Environment.LIMIT && i < totalCountPokemonsMoreOne; i++) {
            const { data } = await Api.get(`/pokemon/${i}`);
            if(data) pokemons.push(data);
        }
    
        if(pokemons.length > 0) return pokemons;

        return new Error('Erro ao listar pokémons');
    } catch (error) {
        console.log(error);
        return new Error('Erro ao listar pokémons');
    }
}

const getNames = async (filter = ''): Promise<Pick<IPokemon, 'name'>[] | Error> => {
    try {
        let rawData: {name: string}[];
        const localStorageData = localStorage.getItem(Environment.LOCAL_STORAGE__RAW_SEARCH_POKEMONS_KEY);
        if(localStorageData !== null){
            rawData = JSON.parse(localStorageData);
        }else{
            const { data } = await Api.get(`/pokemon?limit=${Environment.COUNT_POKEMONS}`);

            rawData = (data as {results: {name: string}[]}).results;

            localStorage.setItem(Environment.LOCAL_STORAGE__RAW_SEARCH_POKEMONS_KEY, JSON.stringify(rawData));
        }

        if(rawData.length > 0){
            const filteredData = rawData.filter(pokemon => pokemon.name.includes(filter));
            if(filteredData.length > 0) return filteredData.slice(0, Environment.LIMIT);
        }

        return new Error('Erro ao listar nomes dos pokémons');
    } catch (error) {
        console.log(error);
        return new Error('Erro ao listar nomes dos pokémons');
    }
}

const getById = async (id: number): Promise<IPokemon | Error> => {
    try {
        const { data } = await Api.get(`/pokemon/${id}`);
    
        if(data) return data;

        return new Error('Erro ao listar pokémon');
    } catch (error) {
        console.log(error);
        return new Error('Erro ao listar pokémon');
    }
}

const getByName = async (name: string): Promise<IPokemon | Error> => {
    try {
        const { data } = await Api.get(`/pokemon/${name}`);
    
        if(data) return data;

        return new Error('Erro ao listar pokémon');
    } catch (error) {
        console.log(error);
        return new Error('Erro ao listar pokémon');
    }
}

/* interface ICount{
    count: number;
}

const getCount = async (): Promise<number | Error> => {
    try {
        const { data } = await Api.get(`/pokemon?limit=1`);
    
        if(data) return (data as ICount).count;

        return new Error('Erro ao contar pokémons');
    } catch (error) {
        console.log(error);
        return new Error('Erro ao contar pokémons');
    }
} */

export const PokemonsService = {
    getByName,
    getNames,
    getById,
    getAll,
}