import { configureStore } from '@reduxjs/toolkit';
import { genresList } from './common/GenreList';

export const store = configureStore({
    reducer: {
        genresList: genresList.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
