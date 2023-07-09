import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { IPokemon } from "../services/models";
import { useSearchParams } from "react-router-dom";
import { PokemonsService } from "../services/api/pokemons/PokemonsService";
import { Environment } from "../environment";

interface IPokemonContext{
    currentPokemon: IPokemon | undefined;
    toggleCurrentPokemon: (data: IPokemon) => void;
    pokemonList: IPokemon[];
    togglePokemonList: (data: IPokemon[]) => void;
    page: number;
}

const PokemonContext = createContext({} as IPokemonContext);

export const usePokemonContext = () => {
    return useContext(PokemonContext);
}

interface IPokemonProvider{
    children?: React.ReactNode;
}

export const PokemonProvider = ({children}: IPokemonProvider) => {
    const [currentPokemon, setCurrentPokemon] = useState<IPokemon>();
    const [pokemonList, setPokemonList] = useState<IPokemon[]>([]);
    const [searchParams] = useSearchParams();

    const toggleCurrentPokemon = useCallback((data: IPokemon) => {
        setCurrentPokemon(data);
    }, [])

    const togglePokemonList = useCallback((data: IPokemon[]) => {
        setPokemonList(data);
    }, [])

    const page = useMemo(() => {
        return Number(searchParams.get('page')) || 1;
    }, [searchParams])

    const pokemonUrl = useMemo(() => {
        return searchParams.get('name') || undefined;
    }, [searchParams])

    useEffect(() => {
        const offset = ((page - 1) * Environment.LIMIT) + 1;
        PokemonsService.getAll(offset).then(result => {
            if(result instanceof Error){
                console.log(result.message);
            }else{
                const pokemonUrlObj = result.filter(pokemon => pokemon.name === pokemonUrl)[0];
                pokemonUrlObj ? toggleCurrentPokemon(pokemonUrlObj) : toggleCurrentPokemon(result[0]);
                togglePokemonList(result);
            }
        })
    }, [page, pokemonUrl])

    return(
        <PokemonContext.Provider value={{currentPokemon, toggleCurrentPokemon, pokemonList, togglePokemonList, page}}>
            {children}
        </PokemonContext.Provider>
    );
}