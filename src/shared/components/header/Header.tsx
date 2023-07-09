import { Search } from "lucide-react";
import { useContext, useState } from "react";
import { NavLink, useSearchParams } from "react-router-dom";
import { ThemeContext, styled } from "styled-components";
import { PokemonsService } from "../../services/api/pokemons/PokemonsService";
import { Environment } from "../../environment";
import { IPokemon } from "../../services/models";

export const Header = () => {
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState<Pick<IPokemon, 'name'>[]>([]);
    const [_, setSearchParams] = useSearchParams();
    const themeContext = useContext(ThemeContext);

    const handleSearchSubmit = (searchValue?: string) => {
        PokemonsService.getByName(searchValue ? searchValue.toLowerCase() : search.toLowerCase()).then(result => {
            if(result instanceof Error){
                console.log(result.message);
            }else{
                const pokemonPage = Math.ceil(result.id / Environment.LIMIT);
                setSearchParams({page: pokemonPage.toString(), name: result.name});
                setSearch('');
                setSearchResults([]);
            }
        })
    }

    const handleSearchOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        PokemonsService.getNames(e.target.value.toLowerCase()).then(result => {
            if(result instanceof Error){
                console.log(result.message);
                setSearchResults([]);
            }else{
                setSearchResults(result);
            }
        })
    }

    return(
        <Container>
            {themeContext && innerWidth > themeContext.screens.sm && (
                <NavLink to='/pokedex#main' className='link_logo logo_hover'>
                    <h1 className='logo logo_hover'>PoKéMoN</h1>
                </NavLink>
            )}
            <div className='search_box'>
                <div className='search'>
                    <input type="text" className='search_input' value={search} placeholder='Pesquisar por nome...' onChange={(e) => handleSearchOnChange(e)} onKeyDown={(e) => e.code === 'Enter' && handleSearchSubmit()}/>
                    <Search className='search_icon' strokeWidth={1} onClick={() => handleSearchSubmit()}/>
                </div>
                {search && searchResults.length > 0 && (
                    <ul className="search_results">
                        {searchResults.map((pokemonName, i) => <li className='search_result' key={i} tabIndex={0} onClick={() => handleSearchSubmit(pokemonName.name)} onKeyDown={(e) => e.code === 'Enter' && handleSearchSubmit(pokemonName.name)}>{pokemonName.name}</li>)}
                    </ul>
                )}
            </div>
        </Container>
    );
}

const Container = styled.div`
    padding: ${({theme}) => theme.spacing.pad.medium};
    display: flex;
    align-items: center;
    justify-content: ${({theme}) => innerWidth > theme.screens.sm ? 'space-between' : 'center'};
    height: 50px;

    .link_logo{
        text-decoration: none;
    }

    .logo{
        font-family: 'Pokemon Solid', sans-serif;
        font-weight: 400;
        color: #ffcb05;
        text-shadow: -3px 3px 0 #2a75bb;
        transition: all 200ms;
    }

    .logo_hover{
        :hover{
            text-shadow: -4px 1px 0 #2a75bb;
        }
    }

    .search_box{
        align-self: flex-start;
        width: ${({theme}) => innerWidth > theme.screens.sm ? '33%' : '100%'};
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .search_results{
        margin-top: ${({theme}) => theme.spacing.margin.small};
        max-height: 10em;
        overflow-y: auto;
        z-index: 1;
        width: 100%;
        padding: ${({theme}) => `0 ${theme.spacing.pad.small}`};
        background-color: #fff;
        border-radius: ${({theme}) => theme.border.radius.medium};
        border: solid 5px #fff;
        box-shadow: ${({theme}) => theme.shadow.directions.down};
    }

    .search_result{
        list-style: none;
        font-size: small;
        font-family: Arial, Helvetica, sans-serif;
        text-transform: uppercase;
        font-weight: 800;
        cursor: pointer;

        &:hover{
            background-color: ${({theme}) => theme.color.secondary.main};
        }
    }

    .search{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: right;
    }

    .search_input{
        height: 2.2em;
        width: 100%;
        background-color: inherit;
        background-color: #fff;
        box-shadow: ${({theme}) => theme.shadow.defaultShadow};
        border: none;
        border-radius: ${({theme}) => theme.border.radius.big};
        padding: ${({theme}) => `0 ${theme.spacing.pad.medium}`};
        outline: none;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        font-size: medium;
    }
    
    .search_icon{
        position: absolute;
        transform: translateX(-50%);
        cursor: pointer;
    }
`