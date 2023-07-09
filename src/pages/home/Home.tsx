import { useState } from "react";
import { IPokemon } from "../../shared/services/models";
import { ListCards, MainCard, Pagination, Wrapper } from "../../shared/components";
import { Environment } from "../../shared/environment";
import { usePokemonContext } from "../../shared/contexts/PokemonContext";

export const Home = () => {
    const [paginationNumber, _] = useState(Math.ceil(Environment.COUNT_POKEMONS/Environment.LIMIT));
    const { currentPokemon, toggleCurrentPokemon, pokemonList, page } = usePokemonContext();

    if(!currentPokemon) return <></>;

    return (
        <Wrapper flexDirection='column' usePaddingY>
            <MainCard data={currentPokemon} />
            <ListCards dataList={pokemonList.filter(pokemonData => pokemonData.id !== currentPokemon.id)} onClick={(data: IPokemon) => toggleCurrentPokemon(data)} />
            <Pagination paginationNumber={paginationNumber} page={page} />
        </Wrapper>
    );
}