import {setPokemons, startLoadingPokemons} from "./pokemonSlice.js";
import {pokemonApi} from "../../../api/pokemonApi.js";

export const getPokemons = (page = 0) => {
    return async (dispatch, getState) => {
        dispatch(startLoadingPokemons());

        const {data} = await pokemonApi.get(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`);
        // console.log(data);

        // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`);
        // const data = await resp.json();
        // console.log(data);

        dispatch(setPokemons({
            pokemons: data.results,
            page: page + 1
        }));
    };
}
