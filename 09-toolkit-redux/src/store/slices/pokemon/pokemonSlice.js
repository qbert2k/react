import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    page: 0,
    pokemons: [],
    isLoading: false
};

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        startLoadingPokemons: (state) => {
            state.isLoading = true;
        },
        setPokemons: (state, sction) => {
            console.log(action);
        }
    },
});

// Action creators are generated for each case reducer function
export const {startLoadingPokemons, setPokemons} = pokemonSlice.actions;
