export const Environment = {
    /**
     * URL base para consultas HTTP na API
     */
    BASE_URL: 'https://pokeapi.co/api/v2',
    /**
     * Limite de linhas por requisição
     */
    LIMIT: 10,
    /**
     * Total de pokémons na PokeAPI. OBS.: O número total de pokémons disponibilizado pela API, está incorreto, por isso esta variável
     */
    COUNT_POKEMONS: 1010,
    /**
     * Nome da chave para pegar os pokemons utilizados para o autocomplete na input de busca no local storage
     */
    LOCAL_STORAGE__RAW_SEARCH_POKEMONS_KEY: 'RAW_SEARCH_POKEMONS'
};