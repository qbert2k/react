import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getPokemons} from './store/slices/pokemon';

export const PokemonApp = () => {

    const {isLoading, pokemons, page} = useSelector(state => state.pokemons);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch((getPokemons()));
    }, [])

    return (
        <>
            <h1>Pokemon App</h1>
            <hr/>
            <span>Loading: { isLoading ? 'True': ' False'}</span>

            <ul>
                {
                    pokemons.map(
                        pokemon => (
                            <li key={pokemon.name}>
                                {pokemon.name} {pokemon.url}
                            </li>
                        )
                    )
                }
                <button onClick={()=> dispatch(getPokemons(page))}>
                    Next
                </button>
            </ul>
        </>
    )
}
