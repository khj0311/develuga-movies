import { gql, useQuery } from '@apollo/client';
import Layout from './contents/templates/common/layout';
import Router from './router';
import './styles/index.css';
import './styles/common.css';
import { useEffect } from 'react';
import { useAppDispatch } from './hooks/useHooks';
import { setMovieListGenresData, setTvListGenresData } from './store/common/GenreList';

const GET_MOVIE_LIST_GENRES = gql`
    query {
        movieListGenres {
            id
            name
        }
    }
`;
const GET_TV_LIST_GENRES = gql`
    query {
        tvListGenres {
            id
            name
        }
    }
`;

function App() {
    const dispatch = useAppDispatch();
    const movieGenres = useQuery(GET_MOVIE_LIST_GENRES);
    const tvGenres = useQuery(GET_TV_LIST_GENRES);

    if (movieGenres.loading || tvGenres.loading) return <p>Loading ... </p>;
    if (movieGenres.error) return <p>Error: {movieGenres.error?.message}</p>;
    if (tvGenres.error) return <p>Error: {tvGenres.error?.message}</p>;

    dispatch(setTvListGenresData(tvGenres.data));
    dispatch(setMovieListGenresData(movieGenres.data));

    return (
        <Layout>
            <Router />
        </Layout>
    );
}

export default App;
