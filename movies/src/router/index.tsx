import { Route, Routes } from 'react-router-dom';
import { PUBLIC_ROUTE_PATH } from '../libs/data/path';
import MoviePage from '../contents/pages/movie/MoviePage';
import MovieUpcomingPage from '../contents/pages/movie/upcoming/MovieUpcomingPage';
import MovieNowPlayingPage from '../contents/pages/movie/now-playing/MovieNowPlayingPage';
import MovieTopRatedPage from '../contents/pages/movie/top-rated/MovieTopRatedPage';
import TvPage from '../contents/pages/tv/TvPage';
import TvAiringTodayPage from '../contents/pages/tv/airing-today/TvAiringTodayPage';
import TvOnTvPage from '../contents/pages/tv/on-tv/TvOnTvPage';
import TvTopRatedPage from '../contents/pages/tv/top-rated/TvTopRatedPage';

const publicRoutes = [
    { id: 0, path: PUBLIC_ROUTE_PATH.MAIN, element: <MoviePage /> },

    { id: 1, path: PUBLIC_ROUTE_PATH.MOVIE, element: <MoviePage /> },
    { id: 2, path: PUBLIC_ROUTE_PATH.MOVIE_NOW_PLAYING, element: <MovieNowPlayingPage /> },
    { id: 3, path: PUBLIC_ROUTE_PATH.MOVIE_UPCOMING, element: <MovieUpcomingPage /> },
    { id: 4, path: PUBLIC_ROUTE_PATH.MOVIE_TOP_RATED, element: <MovieTopRatedPage /> },

    { id: 5, path: PUBLIC_ROUTE_PATH.TV, element: <TvPage /> },
    { id: 6, path: PUBLIC_ROUTE_PATH.TV_AIRING_TODAY, element: <TvAiringTodayPage /> },
    { id: 7, path: PUBLIC_ROUTE_PATH.TV_ON_TV, element: <TvOnTvPage /> },
    { id: 8, path: PUBLIC_ROUTE_PATH.TV_TOP_RATED, element: <TvTopRatedPage /> },

    { id: 9, path: PUBLIC_ROUTE_PATH.PEOPLE, element: <MoviePage /> },

    { id: 10, path: PUBLIC_ROUTE_PATH.USER, element: <MoviePage /> },
    { id: 11, path: PUBLIC_ROUTE_PATH.FAVORITES_MOVIE, element: <MoviePage /> },
    { id: 12, path: PUBLIC_ROUTE_PATH.FAVORITES_TV, element: <MoviePage /> },
    { id: 13, path: PUBLIC_ROUTE_PATH.RECOMMEND_MOVIE, element: <MoviePage /> },
    { id: 14, path: PUBLIC_ROUTE_PATH.RECOMMEND_TV, element: <MoviePage /> },
    { id: 15, path: PUBLIC_ROUTE_PATH.DISCUSSIONS, element: <MoviePage /> },
    { id: 16, path: PUBLIC_ROUTE_PATH.LISTS, element: <MoviePage /> },
    { id: 17, path: PUBLIC_ROUTE_PATH.RATINGS_MOVIE, element: <MoviePage /> },
    { id: 18, path: PUBLIC_ROUTE_PATH.RATINGS_TV, element: <MoviePage /> },
    { id: 19, path: PUBLIC_ROUTE_PATH.WATCHLIST_MOVIE, element: <MoviePage /> },
    { id: 20, path: PUBLIC_ROUTE_PATH.WATCHLIST_TV, element: <MoviePage /> },
];

const Router = () => {
    return (
        <Routes>
            {publicRoutes.map(({ id, path, element }) => (
                <Route key={id} path={path} element={element} />
            ))}
        </Routes>
    );
};

export default Router;
