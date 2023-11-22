import { gql, useQuery } from '@apollo/client';
import { Box } from '@mui/material';
import { useAppSelector } from '../../../../hooks/useHooks';
import CardList from '../../../components/CardList';

const GET_MOVIES = gql`
    query {
        movieListUpcoming {
            genre_ids
            id
            poster_path
            release_date
            title
            vote_average
            vote_count
        }
    }
`;

const MovieUpcomingTemplate = () => {
    const { loading, error, data } = useQuery(GET_MOVIES);
    const movieGenres = useAppSelector((state) => state.genresList.movieListGenres);

    if (loading) return <p>Loading..</p>;
    if (error) return <p>Error : {error.message}</p>;

    if (data !== undefined && data !== null && movieGenres !== undefined && movieGenres !== null) {
        return (
            <Box className='tmdb-content-wrap' sx={{ margin: 'auto', maxWidth: '1440px' }}>
                <Box className='tmdb-content-header'>
                    <h2 className='tmdb-content__main-title'>Upcoming Movies</h2>
                </Box>
                <Box className='tmdb-content-main'>
                    <Box sx={{ flexGrow: 1 }}>
                        <CardList type={'movieList'} data={data.movieListUpcoming} genres={movieGenres.movieListGenres} />
                    </Box>
                </Box>
            </Box>
        );
    }
};

export default MovieUpcomingTemplate;
