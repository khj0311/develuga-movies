import { Outlet, Route, Routes } from 'react-router-dom';
import { PUBLIC_ROUTE_PATH } from '../libs/data/path';
import MovieListTemplate from '../pages/movie/MovieListTemplate';

const publicRoutes = [
    { id: 0, path: PUBLIC_ROUTE_PATH.MAIN, element: <MovieListTemplate /> },

    { id: 1, path: PUBLIC_ROUTE_PATH.MOVIE, element: <MovieListTemplate /> },
    { id: 2, path: PUBLIC_ROUTE_PATH.MOVIE_NOW_PLAYING, element: <MovieListTemplate /> },
    { id: 3, path: PUBLIC_ROUTE_PATH.MOVIE_UPCOMING, element: <MovieListTemplate /> },
    { id: 4, path: PUBLIC_ROUTE_PATH.MOVIE_TOP_RATED, element: <MovieListTemplate /> },

    { id: 5, path: PUBLIC_ROUTE_PATH.TV, element: <MovieListTemplate /> },
    { id: 6, path: PUBLIC_ROUTE_PATH.TV_AIRING_TODAY, element: <MovieListTemplate /> },
    { id: 7, path: PUBLIC_ROUTE_PATH.TV_ON_TV, element: <MovieListTemplate /> },
    { id: 8, path: PUBLIC_ROUTE_PATH.TV_TOP_RATED, element: <MovieListTemplate /> },

    { id: 9, path: PUBLIC_ROUTE_PATH.PEOPLE, element: <MovieListTemplate /> },

    { id: 10, path: PUBLIC_ROUTE_PATH.USER, element: <MovieListTemplate /> },
    { id: 11, path: PUBLIC_ROUTE_PATH.FAVORITES_MOVIE, element: <MovieListTemplate /> },
    { id: 12, path: PUBLIC_ROUTE_PATH.FAVORITES_TV, element: <MovieListTemplate /> },
    { id: 13, path: PUBLIC_ROUTE_PATH.RECOMMEND_MOVIE, element: <MovieListTemplate /> },
    { id: 14, path: PUBLIC_ROUTE_PATH.RECOMMEND_TV, element: <MovieListTemplate /> },
    { id: 15, path: PUBLIC_ROUTE_PATH.DISCUSSIONS, element: <MovieListTemplate /> },
    { id: 16, path: PUBLIC_ROUTE_PATH.LISTS, element: <MovieListTemplate /> },
    { id: 17, path: PUBLIC_ROUTE_PATH.RATINGS_MOVIE, element: <MovieListTemplate /> },
    { id: 18, path: PUBLIC_ROUTE_PATH.RATINGS_TV, element: <MovieListTemplate /> },
    { id: 19, path: PUBLIC_ROUTE_PATH.WATCHLIST_MOVIE, element: <MovieListTemplate /> },
    { id: 20, path: PUBLIC_ROUTE_PATH.WATCHLIST_TV, element: <MovieListTemplate /> },
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
