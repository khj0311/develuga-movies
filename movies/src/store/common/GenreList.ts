import { createSlice } from '@reduxjs/toolkit';

interface I_genreProps {
    id: number;
    name: string;
}
interface I_formation {
    movieListGenres: { movieListGenres: I_genreProps[] };
    tvListGenres: { tvListGenres: I_genreProps[] };
}

const initialState: I_formation = {
    movieListGenres: { movieListGenres: [] },
    tvListGenres: { tvListGenres: [] },
};

let genresList = createSlice({
    name: 'genresList',
    initialState,
    reducers: {
        setMovieListGenresData(state: any, action) {
            state.movieListGenres = action.payload;
        },
        setTvListGenresData(state: any, action) {
            state.tvListGenres = action.payload;
        },
    },
});

export let { setMovieListGenresData, setTvListGenresData } = genresList.actions;
export { genresList };
