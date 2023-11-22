import { ButtonBase, Card, Grid, Typography, styled } from '@mui/material';

interface I_movieProps {
    genre_ids: number[];
    id: number;
    poster_path: string;
    release_date?: string;
    first_air_date?: string;
    title?: string;
    name?: string;
    vote_average: number;
    vote_count: number;
}

interface I_genreProps {
    id: number;
    name: string;
}
interface I_props {
    type: string;
    data: I_movieProps[];
    genres: I_genreProps[];
}
const CardItem = styled(Card)({
    borderRadius: '8px',
});

const CardList = ({ type, data, genres }: I_props) => {
    return (
        <Grid container spacing={2} direction={'row'} sx={{ margin: 0, width: '100%' }}>
            {data.map((movie: I_movieProps) => {
                return (
                    <Grid key={movie.id} container item xs={2} style={{ padding: '10px', flexBasis: '320px', maxWidth: '320px' }}>
                        <CardItem>
                            <Grid container item sx={{ width: 'auto' }}>
                                <ButtonBase>
                                    <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} />
                                </ButtonBase>
                            </Grid>
                            <Grid container item xs={12} sm direction={'column'} sx={{ flexWrap: 'nowrap', width: 'auto' }}>
                                <Typography variant='subtitle1' component='div'>
                                    {type === 'movieList' ? movie.title : movie.name}
                                </Typography>
                                <Grid item>
                                    <Typography variant='subtitle1' component='div'>
                                        {movie.genre_ids.map((genreId) => {
                                            const genreIds = genres.map((gen: { id: number; name: string }) => gen.id);
                                            if (genreIds.indexOf(genreId) > -1) {
                                                return <p key={genreId}>{genres[genreIds.indexOf(genreId)].name}</p>;
                                            }
                                        })}
                                    </Typography>
                                </Grid>
                                <Typography variant='subtitle1' component='div'>
                                    {type === 'movieList' ? movie.release_date : movie.first_air_date}
                                </Typography>
                                <Typography variant='subtitle1' component='div'>
                                    {`User Score : ${Math.round(movie.vote_average * 10)}% (${movie.vote_count})`}
                                </Typography>
                            </Grid>
                        </CardItem>
                    </Grid>
                );
            })}
        </Grid>
    );
};

export default CardList;
