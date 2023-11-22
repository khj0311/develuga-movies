import { gql, useQuery } from '@apollo/client';
import { Box } from '@mui/material';
import { useAppSelector } from '../../../../hooks/useHooks';
import CardList from '../../../components/CardList';

const GET_MOVIES = gql`
    query {
        tvListTopRated {
            genre_ids
            id
            poster_path
            first_air_date
            name
            vote_average
            vote_count
        }
    }
`;

const TvTopRatedTemplate = () => {
    const { loading, error, data } = useQuery(GET_MOVIES);
    const tvGenres = useAppSelector((state) => state.genresList.tvListGenres);

    if (loading) return <p>Loading..</p>;
    if (error) return <p>Error : {error.message}</p>;

    if (data !== undefined && data !== null && tvGenres !== undefined && tvGenres !== null) {
        return (
            <Box className='tmdb-content-wrap' sx={{ margin: 'auto', maxWidth: '1440px' }}>
                <Box className='tmdb-content-header'>
                    <h2 className='tmdb-content__main-title'>Top Rated TV Shows</h2>
                </Box>
                <Box className='tmdb-content-main'>
                    <Box sx={{ flexGrow: 1 }}>
                        <CardList type={'tvList'} data={data.tvListTopRated} genres={tvGenres.tvListGenres} />
                    </Box>
                </Box>
            </Box>
        );
    }
};

export default TvTopRatedTemplate;
