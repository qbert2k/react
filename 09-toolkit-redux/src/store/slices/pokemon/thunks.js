import {setPokemons, startLoadingPokemons} from "./pokemonSlice.js";

export const getPokemons = (page = 0) => {
    return async (dispatch, getState) => {
        dispatch(startLoadingPokemons());

        // TODO: http call

        // dispatch(setPokemons());
    };
}
