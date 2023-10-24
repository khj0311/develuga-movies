import { Route, Routes } from 'react-router-dom';

const PUBLIC_ROUTE_PATH = {
    MAIN: '/',
    MOVIES: '/movies',
    TVS: '/tv-shows',
};

const publicRoutes = [
    { id: 0, path: PUBLIC_ROUTE_PATH.MAIN, element: null },
    { id: 1, path: PUBLIC_ROUTE_PATH.MOVIES, element: null },
    // { id: 2, path: PUBLIC_ROUTE_PATH.TVS, element: null },
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
