import { gql, useQuery } from '@apollo/client';
import { Box } from '@mui/material';
import { useAppSelector } from '../../../../hooks/useHooks';
import CardList from '../../../components/CardList';

const GET_MOVIES = gql`
    query {
        tvListAiringToday {
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

const TvAiringTodayTemplate = () => {
    const { loading, error, data } = useQuery(GET_MOVIES);
    const tvGenres = useAppSelector((state) => state.genresList.tvListGenres);

    if (loading) return <p>Loading..</p>;
    if (error) return <p>Error : {error.message}</p>;

    if (data !== undefined && data !== null && tvGenres !== undefined && tvGenres !== null) {
        return (
            <Box className='tmdb-content-wrap' sx={{ margin: 'auto', maxWidth: '1440px' }}>
                <Box className='tmdb-content-header'>
                    <h2 className='tmdb-content__main-title'>TV Shows Airing Today</h2>
                </Box>
                <Box className='tmdb-content-main'>
                    <Box sx={{ flexGrow: 1 }}>
                        <CardList type={'tvList'} data={data.tvListAiringToday} genres={tvGenres.tvListGenres} />
                    </Box>
                </Box>
            </Box>
        );
    }
};

export default TvAiringTodayTemplate;
