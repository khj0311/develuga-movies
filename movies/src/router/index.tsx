import { Outlet, Route, Routes } from 'react-router-dom';
import { PUBLIC_ROUTE_PATH } from '../libs/data/path';
import MovieTemplate from '../contents/templates/movie';

const publicRoutes = [
    { id: 0, path: PUBLIC_ROUTE_PATH.MAIN, element: <MovieTemplate /> },

    { id: 1, path: PUBLIC_ROUTE_PATH.MOVIE, element: <MovieTemplate /> },
    { id: 2, path: PUBLIC_ROUTE_PATH.MOVIE_NOW_PLAYING, element: <MovieTemplate /> },
    { id: 3, path: PUBLIC_ROUTE_PATH.MOVIE_UPCOMING, element: <MovieTemplate /> },
    { id: 4, path: PUBLIC_ROUTE_PATH.MOVIE_TOP_RATED, element: <MovieTemplate /> },

    { id: 5, path: PUBLIC_ROUTE_PATH.TV, element: <MovieTemplate /> },
    { id: 6, path: PUBLIC_ROUTE_PATH.TV_AIRING_TODAY, element: <MovieTemplate /> },
    { id: 7, path: PUBLIC_ROUTE_PATH.TV_ON_TV, element: <MovieTemplate /> },
    { id: 8, path: PUBLIC_ROUTE_PATH.TV_TOP_RATED, element: <MovieTemplate /> },

    { id: 9, path: PUBLIC_ROUTE_PATH.PEOPLE, element: <MovieTemplate /> },

    { id: 10, path: PUBLIC_ROUTE_PATH.USER, element: <MovieTemplate /> },
    { id: 11, path: PUBLIC_ROUTE_PATH.FAVORITES_MOVIE, element: <MovieTemplate /> },
    { id: 12, path: PUBLIC_ROUTE_PATH.FAVORITES_TV, element: <MovieTemplate /> },
    { id: 13, path: PUBLIC_ROUTE_PATH.RECOMMEND_MOVIE, element: <MovieTemplate /> },
    { id: 14, path: PUBLIC_ROUTE_PATH.RECOMMEND_TV, element: <MovieTemplate /> },
    { id: 15, path: PUBLIC_ROUTE_PATH.DISCUSSIONS, element: <MovieTemplate /> },
    { id: 16, path: PUBLIC_ROUTE_PATH.LISTS, element: <MovieTemplate /> },
    { id: 17, path: PUBLIC_ROUTE_PATH.RATINGS_MOVIE, element: <MovieTemplate /> },
    { id: 18, path: PUBLIC_ROUTE_PATH.RATINGS_TV, element: <MovieTemplate /> },
    { id: 19, path: PUBLIC_ROUTE_PATH.WATCHLIST_MOVIE, element: <MovieTemplate /> },
    { id: 20, path: PUBLIC_ROUTE_PATH.WATCHLIST_TV, element: <MovieTemplate /> },
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
