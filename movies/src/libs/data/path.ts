import ThumbUpRoundedIcon from '@mui/icons-material/ThumbUpRounded'; // movies, tv > popular
import EqualizerRoundedIcon from '@mui/icons-material/EqualizerRounded'; // movies > now playing
import UpcomingRoundedIcon from '@mui/icons-material/UpcomingRounded'; // movies > upcoming
import StarRoundedIcon from '@mui/icons-material/StarRounded'; // movies, tv > top rated
import AirplayRoundedIcon from '@mui/icons-material/AirplayRounded'; // tv > airing today
import LiveTvRoundedIcon from '@mui/icons-material/LiveTvRounded'; // tv > on tv
import Groups2RoundedIcon from '@mui/icons-material/Groups2Rounded'; // people > popular people
import WysiwygRoundedIcon from '@mui/icons-material/WysiwygRounded'; // user > overview
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded'; // user > favorites
import RecommendRoundedIcon from '@mui/icons-material/RecommendRounded'; // user > recommendations
import ForumRoundedIcon from '@mui/icons-material/ForumRounded'; // user > discussions
import BallotRoundedIcon from '@mui/icons-material/BallotRounded'; // user > lists
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded'; // user > ratings
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded'; // user > watchlist

export interface I_pathProps {
    [index: string]: {
        id: string;
        href: string;
        title: string;
        navShow: boolean;
        icon?: any;
        children?: I_pathProps;
        isSelected?: boolean;
    };
}

export const ROUTE_PATH: I_pathProps = {
    MAIN: {
        id: 'main',
        href: '/',
        title: 'Main',
        navShow: false,
    },
    MOVIES: {
        id: 'movies',
        href: '/movies',
        title: 'Movies',
        navShow: true,
        children: {
            POPULAR: {
                id: 'movies-popular',
                href: '/movies/popular',
                title: 'Popular',
                navShow: true,
                icon: ThumbUpRoundedIcon,
            },
            NOW_PLAYING: {
                id: 'movies-now-playing',
                href: '/movies/now-playing',
                title: 'Now Playing',
                navShow: true,
                icon: EqualizerRoundedIcon,
            },
            UPCOMING: {
                id: 'movies-upcoming',
                href: '/movies/upcoming',
                title: 'Upcoming',
                navShow: true,
                icon: UpcomingRoundedIcon,
            },
            TOP_RATED: {
                id: 'movies-top-rated',
                href: '/movies/top-rated',
                title: 'Top Rated',
                navShow: true,
                icon: StarRoundedIcon,
            },
        },
    },
    TV_SHOWS: {
        id: 'tv-shows',
        href: '/tv-shows',
        title: 'TV Shows',
        navShow: true,
        children: {
            POPULAR: {
                id: 'tv-popular',
                href: '/tv-shows/popular',
                title: 'Popular',
                navShow: true,
                icon: ThumbUpRoundedIcon,
            },
            AIRING_TODAY: {
                id: 'tv-airing-today',
                href: '/tv-shows/airing-today',
                title: 'Airing Today',
                navShow: true,
                icon: AirplayRoundedIcon,
            },
            ON_TV: {
                id: 'tv-on-tv',
                href: '/tv-shows/on-tv',
                title: 'On TV',
                navShow: true,
                icon: LiveTvRoundedIcon,
            },
            TOP_RATED: {
                id: 'tv-top-rated',
                href: '/tv-shows/top-rated',
                title: 'Top Rated',
                navShow: true,
                icon: StarRoundedIcon,
            },
        },
    },
    PEOPLE: {
        id: 'people',
        href: '/people',
        title: 'People',
        navShow: true,
        children: {
            POPULAR: {
                id: 'people-popular',
                href: '/people/popular',
                title: 'Popular People',
                navShow: true,
                icon: Groups2RoundedIcon,
            },
        },
    },
    USER: {
        id: 'user',
        href: '/user',
        title: 'User',
        navShow: true,
        children: {
            OVERVIEW: {
                id: 'user-overview',
                href: '/user/overview',
                title: 'Overview',
                navShow: true,
                icon: WysiwygRoundedIcon,
            },
            FAVORITES: {
                id: 'user-favorites',
                href: '/user/favorites',
                title: 'Favorites',
                navShow: true,
                icon: FavoriteRoundedIcon,
                children: {
                    MOVIES: {
                        id: 'user-favorites-movies',
                        href: '/user/favorites/movies',
                        title: 'Movies',
                        navShow: true,
                    },
                    TV_SHOWS: {
                        id: 'user-favorites-tv-shows',
                        href: '/user/favorites/tv-shows',
                        title: 'TV Shows',
                        navShow: true,
                    },
                },
            },
            RECOMMAND: {
                id: 'user-recommendations',
                href: '/user/recommendations',
                title: 'Recommendations',
                navShow: true,
                icon: RecommendRoundedIcon,
                children: {
                    MOVIES: {
                        id: 'user-recommendations-movies',
                        href: '/user/recommendations/movies',
                        title: 'Movies',
                        navShow: true,
                    },
                    TV_SHOWS: {
                        id: 'user-recommendations-tv-shows',
                        href: '/user/recommendations/tv-shows',
                        title: 'TV Shows',
                        navShow: true,
                    },
                },
            },
            DISCUSSIONS: {
                id: 'user-discussions',
                href: '/user/discussions',
                title: 'Discussions',
                navShow: true,
                icon: ForumRoundedIcon,
            },
            LISTS: {
                id: 'user-lists',
                href: '/user/lists',
                title: 'Lists',
                navShow: true,
                icon: BallotRoundedIcon,
            },
            RATINGS: {
                id: 'user-ratings',
                href: '/user/ratings',
                title: 'Ratings',
                navShow: true,
                icon: StarBorderRoundedIcon,
                children: {
                    MOVIES: {
                        id: 'user-ratings-movies',
                        href: '/user/ratings/movies',
                        title: 'Movies',
                        navShow: true,
                    },
                    TV_SHOWS: {
                        id: 'user-ratings-tv-shows',
                        href: '/user/ratings/tv-shows',
                        title: 'TV Shows',
                        navShow: true,
                    },
                },
            },
            WATCHLIST: {
                id: 'user-watch-list',
                href: '/user/watch-list',
                title: 'Watchlist',
                navShow: true,
                icon: VisibilityRoundedIcon,
                children: {
                    MOVIES: {
                        id: 'user-watch-list-movies',
                        href: '/user/watch-list/movies',
                        title: 'Movies',
                        navShow: true,
                    },
                    TV_SHOWS: {
                        id: 'user-watch-list-tv-shows',
                        href: '/user/watch-list/tv-shows',
                        title: 'TV Shows',
                        navShow: true,
                    },
                },
            },
        },
    },
};
