import ThumbUpRoundedIcon from '@mui/icons-material/ThumbUpRounded'; // movie, tv > popular
import EqualizerRoundedIcon from '@mui/icons-material/EqualizerRounded'; // movie > now playing
import UpcomingRoundedIcon from '@mui/icons-material/UpcomingRounded'; // movie > upcoming
import StarRoundedIcon from '@mui/icons-material/StarRounded'; // movie, tv > top rated
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

export interface I_navProps {
    [index: string]: {
        id: string;
        href: string;
        title: string;
        navShow: boolean;
        icon?: any;
        children?: I_navProps;
        isSelected?: boolean;
    };
}

export const NAVIGATION: I_navProps = {
    MOVIE: {
        id: 'movie',
        href: '',
        title: 'Movies',
        navShow: true,
        children: {
            POPULAR: {
                id: 'movie-popular',
                href: '/movie',
                title: 'Popular',
                navShow: true,
                icon: ThumbUpRoundedIcon,
            },
            NOW_PLAYING: {
                id: 'movie-now-playing',
                href: '/movie/now-playing',
                title: 'Now Playing',
                navShow: true,
                icon: EqualizerRoundedIcon,
            },
            UPCOMING: {
                id: 'movie-upcoming',
                href: '/movie/upcoming',
                title: 'Upcoming',
                navShow: true,
                icon: UpcomingRoundedIcon,
            },
            TOP_RATED: {
                id: 'movie-top-rated',
                href: '/movie/top-rated',
                title: 'Top Rated',
                navShow: true,
                icon: StarRoundedIcon,
            },
        },
    },
    TV_SHOWS: {
        id: 'tv',
        href: '',
        title: 'TV Shows',
        navShow: true,
        children: {
            POPULAR: {
                id: 'tv-popular',
                href: '/tv',
                title: 'Popular',
                navShow: true,
                icon: ThumbUpRoundedIcon,
            },
            AIRING_TODAY: {
                id: 'tv-airing-today',
                href: '/tv/airing-today',
                title: 'Airing Today',
                navShow: true,
                icon: AirplayRoundedIcon,
            },
            ON_TV: {
                id: 'tv-on-tv',
                href: '/tv/on-tv',
                title: 'On TV',
                navShow: true,
                icon: LiveTvRoundedIcon,
            },
            TOP_RATED: {
                id: 'tv-top-rated',
                href: '/tv/top-rated',
                title: 'Top Rated',
                navShow: true,
                icon: StarRoundedIcon,
            },
        },
    },
    PEOPLE: {
        id: 'people',
        href: '',
        title: 'People',
        navShow: true,
        children: {
            POPULAR: {
                id: 'person',
                href: '/person',
                title: 'Popular People',
                navShow: true,
                icon: Groups2RoundedIcon,
            },
        },
    },
    USER: {
        id: 'user',
        href: '',
        title: 'User',
        navShow: true,
        children: {
            OVERVIEW: {
                id: 'user-overview',
                href: '/user',
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
                        id: 'user-favorites-movie',
                        href: '/user/favorites/movie',
                        title: 'Movies',
                        navShow: true,
                    },
                    TV_SHOWS: {
                        id: 'user-favorites-tv',
                        href: '/user/favorites/tv',
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
                        id: 'user-recommendations-movie',
                        href: '/user/recommendations/movie',
                        title: 'Movies',
                        navShow: true,
                    },
                    TV_SHOWS: {
                        id: 'user-recommendations-tv',
                        href: '/user/recommendations/tv',
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
                        id: 'user-ratings-movie',
                        href: '/user/ratings/movie',
                        title: 'Movies',
                        navShow: true,
                    },
                    TV_SHOWS: {
                        id: 'user-ratings-tv',
                        href: '/user/ratings/tv',
                        title: 'TV Shows',
                        navShow: true,
                    },
                },
            },
            WATCHLIST: {
                id: 'user-watchlist',
                href: '/user/watchlist',
                title: 'Watchlist',
                navShow: true,
                icon: VisibilityRoundedIcon,
                children: {
                    MOVIES: {
                        id: 'user-watchlist-movie',
                        href: '/user/watchlist/movie',
                        title: 'Movies',
                        navShow: true,
                    },
                    TV_SHOWS: {
                        id: 'user-watchlist-tv',
                        href: '/user/watchlist/tv',
                        title: 'TV Shows',
                        navShow: true,
                    },
                },
            },
        },
    },
};
